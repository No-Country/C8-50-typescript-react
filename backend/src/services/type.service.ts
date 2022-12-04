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
  async findTypeById(id: string): Promise<Type | null> {
    return (await this.repository).findOne({
      where: { id: id },
      select: { id: true, title: true },
      withDeleted: false,
    });
  }
  async deleteType(id: string) {
    return (await this.repository)
      .createQueryBuilder()
      .delete()
      .from(Type)
      .where({ id: id })
      .execute();
  }
  async createType(body: Type) {
    return (await this.repository).save(body); 
  }
}
