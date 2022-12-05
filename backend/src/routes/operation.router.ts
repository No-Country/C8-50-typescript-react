import { OperationController } from "../controllers/operation.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class OperationRouter extends indexRouter<OperationController, Auth> {
  constructor() {
    super(OperationController, Auth);
  }
  routes(): void {
    this.router.get("/realEstate/operation", (req, res) =>
      this.controller.getAllOperation(req, res)
    );
    this.router.post(
      "/realEstate/operation",
      (req, res, next) => [this.middleware.isAdmin(req, res, next)],
      (req, res) => this.controller.createOperation(req, res)
    );
  }
}
