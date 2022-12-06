import { PostgresDataSource } from "../db";
import { RealEstate } from "../entities/RealEstate.entity";
import { Wishlist } from "../entities/Whislist.entity";
import { BaseService } from "./base.service";
export class WishlistService {
  async createWishlist(body: any) {
    let real = new RealEstate();
    real.id = body.realEstates
    console.log(real, "Real")
    let wish = new Wishlist();
    wish.user = body.user;
    wish.realEstates = [real]
    console.log(wish, "wisj 1")
    const data = await PostgresDataSource.manager.save(wish)
    const loadedPhoto = await PostgresDataSource.getRepository(Wishlist).findOne({
        where: { id: data.id },
        relations: { realEstates: true, user: true},
        withDeleted: false,
      })
      console.log(data, "console data")
    console.log(await loadedPhoto, "Carge de informacion") 
    return data
  }
}
