import { TypeController } from "../controllers/type.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class TypeRouter extends indexRouter<TypeController, Auth> {
  constructor() {
    super(TypeController, Auth);
  }

  routes(): void {
    this.router.get("/realEstate/type", (req, res) =>
      this.controller.getAllType(req, res)
    );
  }
}
