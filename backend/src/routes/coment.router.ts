import { CommentController } from "../controllers/comment.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class CommentRouter extends indexRouter<CommentController, Auth> {
  constructor() {
    super(CommentController, Auth);
  }

  routes(): void {
    this.router.post("/realEstate/comment", (req, res) =>
      this.controller.createComent(req, res)
    );
  }
}
