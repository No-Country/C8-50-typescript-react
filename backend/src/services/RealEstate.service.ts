import { BaseService } from "./base.service";
import { Auth } from "../middlewares/auth.middleware";
import { RealEstate } from "../entities/RealEstate.entity";

export class RealEstateService extends BaseService<RealEstate> {
  constructor() {
    super(RealEstate);
  }

  async getAllRealEstates(): Promise<RealEstate[]> {
    return (await this.repository).find({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        image: true,
      },
      withDeleted: false,
      order: {
        id: "ASC",
      },
    });
  }

  async findRealEstateById(id: string): Promise<RealEstate | null> {
    return (await this.repository).findOne({
      where: { id: id },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        image: true,
        country: true,
        city: true,
        latitude: true,
        longitude: true,
        operation: {
          title: true
        },
        type: {
          title: true
        },
        quantity: {
          quantity: true,
          feature: {
            title: true,
          }
        }
      },
      relations: { 
        user: true,
        operation: true,
        type: true,
        quantity: {
            feature: true
          },
        comment: true,
        },

      withDeleted: false,
    });
  }
}
