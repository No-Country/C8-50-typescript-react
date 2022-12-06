import { BaseService } from "./base.service";
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
  async findRealStateId(id: string) {
    return (await this.repository).findOne({ where: { id: id } });
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
          title: true,
        },
        type: {
          title: true,
        },
        quantity: {
          quantity: true,
          feature: {
            title: true,
          },
        },
      },
      relations: {
        user: true,
        operation: true,
        type: true,
        quantity: {
          feature: true,
        },
        comment: true,
      },

      withDeleted: false,
    });
  }
  async updateRealEstate(id: string, newData: any) {
    (await this.repository)
      .createQueryBuilder()
      .update(RealEstate)
      .set(newData)
      .where({ id: id })
      .execute();
  }
  async deleteRealEstate(id: string) {
    (await this.repository)
      .createQueryBuilder()
      .softDelete()
      .from(RealEstate)
      .where({ id: id })
      .execute();
  }
  async createRealEstate(
    newRealEstate: RealEstate,
    userId: string,
    typeId: string,
    operationId: string
  ) {
    try {
      const realEstate = await (await this.repository).save(newRealEstate);
      await (await this.repository)
        .createQueryBuilder()
        .relation(RealEstate, "user")
        .of(realEstate.id)
        .set(userId);
      await (await this.repository)
        .createQueryBuilder()
        .relation(RealEstate, "type")
        .of(realEstate.id)
        .set(typeId);
      await (await this.repository)
        .createQueryBuilder()
        .relation(RealEstate, "operation")
        .of(realEstate.id)
        .set(operationId);
      return (await this.repository).findOne({
        where: { id: realEstate.id },
        relations: {
          user: true,
          operation: true,
          type: true,
          quantity: {
            feature: true,
          },
          comment: true,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
