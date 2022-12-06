import { Comment } from "../entities/Comment.entity";
import { RealEstate } from "../entities/RealEstate.entity";
import { User } from "../entities/User.entity";
import { BaseService } from "./base.service";

export class CommentService extends BaseService<Comment> {
  constructor() {
    super(Comment);
  }

  async createComment(body: Comment) {
    return (await this.repository).save(body);
  }
}
