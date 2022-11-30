import { User } from "../entities/User.entity";
import { BaseService } from "./base.service";


export class UserService extends BaseService<User> {
  
    constructor() {
    super(User);
  }

  async findAllUser(): Promise<User[]> {
    return (await this.repository).find();
  }
  
}
