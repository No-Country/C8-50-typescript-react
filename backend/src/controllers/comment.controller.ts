import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { CommentService } from "../services/coment.service";
import { RealEstateService } from "../services/RealEstate.service";
import { UserService } from "../services/user.service";

export class CommentController {
  constructor(
    private commnentService: CommentService = new CommentService(),
    private userService: UserService = new UserService(),
    private realStateSrvice: RealEstateService = new RealEstateService(),
    private readonly httpResponse = new HttpResponse()
  ) {}
  async createComent(req: Request, res: Response) {
    const body = req.body;
    try {
      const existUser = await this.userService.findUserById(body.user);
      if (!existUser) {
        return this.httpResponse.NotFound(res, "Usuario no encontrado");
      }
      const existRealState = await this.realStateSrvice.findRealStateId(
        body.realEstate
      );
      if (!existRealState) {
        return this.httpResponse.NotFound(res, "Propiedad No Encontrada");
      }
      await this.commnentService.createComment(body);
      return this.httpResponse.Ok(res);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
