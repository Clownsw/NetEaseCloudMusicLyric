// @ts-ignore
import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";
import {start} from './common.js';

class HomeResource extends Drash.Resource {
    public paths = ["/"];

    public GET(request: Drash.Request, response: Drash.Response): void {
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
            let lyricResp = await fetch("https://music.163.com/weapi/song/lyric?csrf_token=", {
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
            return response.json({
                lryic: await lyricResp.json(),
            })
        }
    }
}

const server = new Drash.Server({
    hostname: "localhost",
    port: 1447,
    protocol: "http",
    resources: [HomeResource, LyricResource],
});

server.run();

console.log(`Server running at ${server.address}.`);
