import { CallController } from "../controllers/call.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class CallRouter extends indexRouter<CallController, Auth> {
  constructor() {
    super(CallController, Auth);
  }

  routes(): void {
    this.router.post("/realEstate/call", (req, res) =>
      this.controller.createCall(req, res)
    );
  }
}
