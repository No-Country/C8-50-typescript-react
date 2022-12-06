import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { BaseService } from "../services/base.service";
import { CallService } from "../services/call.service";
import { RealEstateService } from "../services/RealEstate.service";
import { UserService } from "../services/user.service";

export class CallController {
  constructor(
    private readonly callService: CallService = new CallService(),
    private readonly userService: UserService = new UserService(),
    private readonly realstateService: RealEstateService = new RealEstateService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async createCall(req: Request, res: Response) {
    const body = req.body;
    try {
      const existUser = await this.userService.findUserById(body.user);
      if (!existUser) {
        return this.httpResponse.NotFound(res, "Usuario No Encontrado");
      }
      const existRealState = await this.realstateService.findRealStateId(
        body.realEstate
      );
      if (!existRealState) {
        return this.httpResponse.NotFound(res, "Propiedad No Encontrada");
      }
      await this.callService.CreateCall(body);
      return this.httpResponse.Ok(res);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
