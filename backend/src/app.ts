import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./routes/user.router";
import { Config } from "./config/config";
import { FeatureRouter } from "./routes/feature.router";
import { TypeRouter } from "./routes/type.router";
import { OperationRouter } from "./routes/operation.router";
import { RealEstateRouter } from "./routes/realEstate.router";
import { CommentRouter } from "./routes/coment.router";
import { CallRouter } from "./routes/call.router";
import { WishlistRouter } from "./routes/wishlist.router";

export class App extends Config {
  public app: express.Application = express();

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());

    this.app.use("/api", this.routes());
  }

  routes(): Array<express.Router> {
    return [
      new UserRouter().router,
      new FeatureRouter().router,
      new TypeRouter().router,
      new OperationRouter().router,
      new RealEstateRouter().router,
      new CommentRouter().router,
      new CallRouter().router,
      new WishlistRouter().router,
    ];
  }
}
