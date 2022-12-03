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
}
