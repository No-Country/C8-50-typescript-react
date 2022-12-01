"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const index_router_1 = require("./index.router");
class UserRouter extends index_router_1.indexRouter {
    constructor() {
        super(user_controller_1.UserController, auth_middleware_1.Auth);
    }
    routes() {
        this.router.get("/user", (req, res) => this.controller.getAllUsers(req, res));
        this.router.post("/user/register", (req, res) => this.controller.registerUser(req, res));
        this.router.get("/user/:id", (req, res) => this.controller.getUserById(req, res));
        this.router.post("/user/login", (req, res) => this.controller.loginUser(req, res));
        this.router.put("/user/changeRol/:id", (req, res, next) => [this.middleware.isSuperAdmin(req, res, next)], (req, res) => this.controller.changeRol(req, res));
    }
}
exports.UserRouter = UserRouter;
