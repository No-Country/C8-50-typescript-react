import { WishlistController } from "../controllers/wishlist.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class WishlistRouter extends indexRouter<WishlistController, Auth> {
  constructor() {
    super(WishlistController, Auth);
  }
  routes(): void {
    this.router.post("/realEstate/wishlist", (req, res) =>
      this.controller.createWishlist(req, res)
    );
    this.router.delete("/realEstate/wishlist/:id", (req, res) =>
      this.controller.deleteWishlist(req, res)
    );
  }
}
