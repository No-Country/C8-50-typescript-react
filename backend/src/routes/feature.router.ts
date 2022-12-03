import { FeatureController } from "../controllers/feature.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class FeatureRouter extends indexRouter<FeatureController, Auth> {
  constructor() {
    super(FeatureController, Auth);
  }
  routes(): void {
    this.router.get("/realEstate/feature", (req, res) =>
      this.controller.getfeature(req, res)
    );
  }
}
