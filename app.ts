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

    public GET(request: Drash.Request, response: Drash.Response): void {
        const songId = request.queryParam("songId");
        if (songId === undefined) {
            return response.json({
                error: 'Not Found songId',
            })
        } else {
            return response.json({
                param: start(111),
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
