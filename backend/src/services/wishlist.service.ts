import { PostgresDataSource } from "../db";
import { RealEstate } from "../entities/RealEstate.entity";
import { Wishlist } from "../entities/Whislist.entity";
import { BaseService } from "./base.service";
export class WishlistService {
  async createWishlist(body: any) {
    let real = new RealEstate();
    real.id = body.realEstates
    let wish = new Wishlist();
    wish.user = body.user;
    wish.realEstates = [real]
    const data = await PostgresDataSource.manager.save(wish)
    const loadedPhoto = await PostgresDataSource.getRepository(Wishlist).findOne({
        where: { id: data.id },
        relations: { realEstates: true, user: true},
        withDeleted: false,
      })
    return data
  }
}
