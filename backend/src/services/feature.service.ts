import { Features } from "../entities/Feature.entity";
import { BaseService } from "./base.service";

export class FeatureService extends BaseService<Features> {
  constructor() {
    super(Features);
  }
  async getAllFeature(): Promise<Features[]> {
    return (await this.repository).find({
      select: {
        id: true,
        title: true,
      },
      withDeleted: false,
      order: {
        title: "ASC",
      },
    });
  }
  async findFeatureById(id: string): Promise<Features | null> {
    return (await this.repository).findOne({
      where: { id: id },
      select: { deleteAt: false },
      withDeleted: false,
    });
  }
  async delteFeature(id: number) {
    return (await this.repository)
      .createQueryBuilder()
      .delete()
      .from(Features)
      .where({ id: id })
      .execute();
  }
}
