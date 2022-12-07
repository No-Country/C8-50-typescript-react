import { PostgresDataSource } from "../db";
import { RealEstate } from "../entities/RealEstate.entity";
import { Wishlist } from "../entities/Whislist.entity";
import { BaseService } from "./base.service";
export class WishlistService extends BaseService<Wishlist> {
  constructor() {
    super(Wishlist);
  }
  async createWishlist(body: any) {
    let real = new RealEstate();
    real.id = body.realEstates;
    let wish = new Wishlist();
    wish.user = body.user;
    wish.realEstates = [real];
    const data = await PostgresDataSource.manager.save(wish);
    return data;
  }
  async deleteWishlistById(id: any, reals: any) {
    console.log(id, "id de service", reals, "id de realstate")
    const delet = (await this.repository)
      .createQueryBuilder()
      .relation(Wishlist, "realEstates")
      .of(id)
      .remove(reals);
      return (await this.repository).delete(id)
  }
  async findWishlistById(id: string) {
    return (await this.repository).findOne({
      where: { id: id },
      select: { deleteAt: false },
      relations: {realEstates: true},
      withDeleted: false,
    });
  }
}
