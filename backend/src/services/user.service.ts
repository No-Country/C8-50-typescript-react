import { User } from "../entities/User.entity";
import { BaseService } from "./base.service";

export class UserService extends BaseService<User> {
  constructor() {
    super(User);
  }

  async findAllUser(): Promise<User[]> {
    return (await this.repository).find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        img: true,
      },
      withDeleted: false,
      order: {
        lastName: "ASC",
    },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    return (await this.repository).findOne({
      where: { id: id },
      select: {
        deleteAt: false,
      },
      relations: { rol: true},
      withDeleted: false,
    });
  }
}
