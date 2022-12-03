import { Type } from "../entities/type.entity";
import { BaseService } from "./base.service";

export class TypeService extends BaseService<Type> {
  constructor() {
    super(Type);
  }
  async getAllType(): Promise<Type[]> {
    return (await this.repository).find({
      select: { id: true, title: true },
      withDeleted: false,
      order: { title: "ASC" },
    });
  }
}
