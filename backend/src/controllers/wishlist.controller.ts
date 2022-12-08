import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { RealEstateService } from "../services/RealEstate.service";
import { UserService } from "../services/user.service";
import { WishlistService } from "../services/wishlist.service";

export class WishlistController {
  constructor(
    private readonly wishlistService: WishlistService = new WishlistService(),
    private readonly userService: UserService = new UserService(),
    private readonly realstateService: RealEstateService = new RealEstateService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async createWishlist(req: Request, res: Response) {
    const body = req.body;
    try {
      const existUser = await this.userService.findUserById(body.user);
      if (!existUser) {
        return this.httpResponse.NotFound(res, "Usuario No Encontrado");
      }
      const existRealState = await this.realstateService.findRealStateId(
        body.realEstates
      );
      if (!existRealState) {
        return this.httpResponse.NotFound(res, "Propiedad No Encontrada");
      }
      await this.wishlistService.createWishlist(body);
      return this.httpResponse.Ok(res);
    } catch (error) {}
  }
  async deleteWishlist(req: Request, res: Response){
    const {id} = req.params;
    try {
      const existWishlist = await this.wishlistService.findWishlistById(id)
      if(!existWishlist){
        return this.httpResponse.NotFound(res, "Wishlist No Encontrada")
      }
      const dat = existWishlist.realEstates[0].id
      console.log(dat, "dat")
     
      await this.wishlistService.deleteWishlistById(id, dat )
      return this.httpResponse.Ok(res)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

}
