"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
class indexRouter {
    //public middleware: Middleware
    constructor(TController) {
        this.router = (0, express_1.Router)();
        this.controller = new TController;
        this.routes();
    }
    routes() { }
}
exports.indexRouter = indexRouter;
