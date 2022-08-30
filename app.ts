import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";
import { start } from './common.js';
import { musicInfoToNameAndAuthor } from "./parse.js";
import { createErrorResponse, createErrorResponseMessage, createSuccessResponseData } from "./responseUtil.ts";

type Track = {
    name: string,
    id: number,
};

type MusicInfo = {
    id: number,
    url: string,
};

type Music = {
    name: string,
    artist: string,
    url: string,
    cover: string,
    lrc: string,
};

class HomeResource extends Drash.Resource {
    public paths = ["/"];

    public GET(_request: Drash.Request, response: Drash.Response): void {
        return response.json({
            welcome: 'https://smilex.cn/',
        });
    }
}

class LyricResource extends Drash.Resource {
    public paths = ["/lyric"];

    public async GET(request: Drash.Request, response: Drash.Response): Promise<void> {
        const songId = request.queryParam("songId");
        if (songId === undefined) {
            return response.json({
                error: 'Not Found songId',
            })
        } else {
            const lyricResp = await fetch("https://music.163.com/weapi/song/lyric?csrf_token=", {
                method: 'POST',
                headers: {
                    'authority': 'music.163.com',
                    'accept': '*/*',
                    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
                    'content-type': 'application/x-www-form-urlencoded',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
                },
                body: start(songId),
            })
            const lyricRespJson = await lyricResp.json();
            return response.send<string>('text/plain; charset=utf8', lyricRespJson.lrc.lyric);
        }
    }
}

class MusicGroupResource extends Drash.Resource {
    public paths = ["/playlist"];

    public async GET(request: Drash.Request, response: Drash.Response): Promise<void> {
        const id = request.queryParam("id");
        if (id === undefined) {
            createErrorResponse(response);
            return;
        }
        const apiResponse = await fetch(`http://localhost:3000/playlist/detail?id=${id}`);
        const apiResponseJson = await apiResponse.json();

        try {
            // 解析出歌单内所有音乐ID
            const tracks: Array<Track> = apiResponseJson.playlist.tracks;
            const ids: Array<number> = tracks.map((track) => {
                return track.id;
            });

            // 解析出歌单所有URL
            let reqUrl = "";
            ids.map((id) => {
                reqUrl += id + ','
            });
            reqUrl = reqUrl.substring(0, reqUrl.lastIndexOf(','));
            const r = await fetch(`http://localhost:3000/song/url?id=${reqUrl}`)
            const rJson = await r.json();
            const data: Array<MusicInfo> = rJson.data;
            const urls: Array<string> = data.map((v) => {
                return v.url;
            });

            let len = ids.length;

            if (ids.length !== reqUrl.length) {
                len = ids.length > reqUrl.length ? reqUrl.length : ids.length;
            }

            const musics: Array<Music> = [];
            for (let i = 0; i < len; i++) {
                if (urls[i] === null) {
                    continue;
                }

                const r = await fetch(`http://localhost:3000/song/detail?ids=${ids[i]}`);
                const tmp = musicInfoToNameAndAuthor(await r.json());

                musics.push({
                    name: tmp.name,
                    artist: tmp.author,
                    url: urls[i],
                    cover: tmp.cover,
                    lrc: `https://music.api.smilex.cn/lyric?songId=${ids[i]}`,
                });
            }

            createSuccessResponseData(response, musics);
        } catch (error) {
            createErrorResponseMessage(response, error);
            return;
        }
    }
}

const server = new Drash.Server({
    hostname: "localhost",
    port: 1447,
    protocol: "http",
    resources: [HomeResource, LyricResource, MusicGroupResource],
});

server.run();
console.log(`Server running at ${server.address}.`);
