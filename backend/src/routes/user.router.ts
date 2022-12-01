import { UserController } from "../controllers/user.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class UserRouter extends indexRouter<UserController, Auth> {
  constructor() {
    super(UserController, Auth);
  }

  routes(): void {
    this.router.get("/user", (req, res) =>
      this.controller.getAllUsers(req, res)
    );
    this.router.post("/user/register", (req, res) =>
      this.controller.registerUser(req, res)
    );
    this.router.get("/user/:id", (req, res) =>
      this.controller.getUserById(req, res)
    );
    this.router.post("/user/login", (req, res) =>
      this.controller.loginUser(req, res)
    );
    this.router.put(
      "/user/changeRol/:id",
      (req, res, next) => [this.middleware.isSuperAdmin(req, res, next)],
      (req, res) => this.controller.changeRol(req, res)
    );
    this.router.delete(
      "/user/:id",
      (req, res, next) => [this.middleware.isOwner(req, res, next)],
      (req, res) => this.controller.deleteUser(req, res)
    );
    this.router.delete(
      "/user/:id",
      (req, res, next) => [this.middleware.isSuperAdmin(req, res, next)],
      (req, res) => this.controller.deleteUser(req, res)
    );
    this.router.put(
        "/user/:id",
        (req, res, next) => [this.middleware.isOwner(req, res, next)],
        (req, res) => this.controller.updateUser(req, res)
      );
  }
}
