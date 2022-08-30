import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";
import { defaultErrorCode, defaultSuccessCode, success, unknownError } from "./config.ts";

// deno-lint-ignore ban-types
function createSuccessResponseAll(response: Drash.Response, headers: Headers | null, body: object | BodyInit | null): void {
    if (headers !== null) {
        response.headers = headers;
    }
    response.headers.set("content-type", 'application/json; charset=utf8;');
    response.body = typeof body === 'string' ? body : JSON.stringify(body);
}

// deno-lint-ignore ban-types
function createSuccessResponseData(response: Drash.Response, data: object | BodyInit | string): void {
    createSuccessResponseAll(response, null, data);
}

function createSuccessResponseMessage(response: Drash.Response, message: string): void {
    createSuccessResponseAll(response, null, {
        code: defaultSuccessCode,
        message
    })
}

function createSuccessResponse(response: Drash.Response): void {
    createSuccessResponseMessage(response, success);
}

// deno-lint-ignore ban-types
function createErrorRepsonseAll(response: Drash.Response, headers: Headers | null, body: object | BodyInit | null, errorCode: number | null): void {
    if (headers !== null) {
        response.headers = headers;
    }
    response.headers.set("content-type", 'application/json; charset=utf8;');
    response.body = typeof body === 'string' ? body : JSON.stringify(body);
    response.status = errorCode === null ? defaultErrorCode : errorCode;
}

function createErrorResponseMessage(response: Drash.Response, message: string): void {
    createErrorRepsonseAll(response, null, {
        code: defaultErrorCode,
        message
    }, null);
}

// deno-lint-ignore ban-types
function createErrorResponseData(response: Drash.Response, body: object | BodyInit | null): void {
    createErrorRepsonseAll(response, null, body, null);
}

function createErrorResponse(response: Drash.Response): void {
    createErrorResponseData(response, {
        code: defaultErrorCode,
        message: unknownError
    });
}

export {
    createSuccessResponseAll,
    createSuccessResponseData,
    createSuccessResponseMessage,
    createSuccessResponse,
    createErrorRepsonseAll,
    createErrorResponseMessage,
    createErrorResponseData,
    createErrorResponse
};

