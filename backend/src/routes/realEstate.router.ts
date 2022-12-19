import { RealEstateController } from "../controllers/RealEstate.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class RealEstateRouter extends indexRouter<RealEstateController, Auth> {
  constructor() {
    super(RealEstateController, Auth);
  }

  routes(): void {
    this.router.get("/realEstate", (req, res) =>
      this.controller.getAllRealEstates(req, res)
    );
    this.router.get("/realEstate/:id", (req, res) =>
      this.controller.getRealEstateById(req, res)
    );
    this.router.get("/realEstate/coment/:id", (req, res) =>
      this.controller.findComentByIdRealState(req, res)
    );
    this.router.put(
      "/realEstate/:id",
      (req, res, next) => [this.middleware.isOwnerRealEstate(req, res, next)],
      (req, res) => this.controller.updateRealEstate(req, res)
    );
    this.router.delete(
      "/realEstate/:id",
      (req, res, next) => [this.middleware.isOwnerRealEstate(req, res, next)],
      (req, res) => this.controller.deleteRealEstate(req, res)
    );
    this.router.post(
      "/realEstate",
      (req, res, next) => [this.middleware.isAdmin(req, res, next)],
      (req, res) => this.controller.createRealEstate(req, res)
    );
  }
}
