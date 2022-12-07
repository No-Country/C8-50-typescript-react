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
  async deleteWishlistById(id: string) {
    return (await this.repository)
      .createQueryBuilder()
      .delete()
      .from(Wishlist)
      .where({ id: id })
      .execute();
  }
  async findWishlistById(id: string){
    return (await this.repository).findOne({where: {id: id}, select: {deleteAt: false}, withDeleted: false})
  }
}
