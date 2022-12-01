"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
class indexRouter {
    constructor(TController, UMiddleware) {
        this.router = (0, express_1.Router)();
        this.controller = new TController;
        this.middleware = new UMiddleware;
        this.routes();
    }
    routes() { }
}
exports.indexRouter = indexRouter;
