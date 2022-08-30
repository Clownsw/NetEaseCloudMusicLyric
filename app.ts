import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";
import { start } from './common.js';

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

    public async GET(_request: Drash.Request, respnse: Drash.Response): Promise<void> {

        const pageResp = await fetch("https://music.163.com/playlist?id=538952486", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "iframe",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://music.163.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });

        const pageText = await pageResp.text()
        if (pageText.indexOf('登录后才可以查看') === -1) {
            // TODO 待处理
        } else {
            Deno.writeTextFile("test.html", pageText);

            return respnse.send<string>('text/plain; charset=utf8', "test");
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
