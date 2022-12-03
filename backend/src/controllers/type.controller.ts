import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { TypeService } from "../services/type.service";

export class TypeController {
  constructor(
    private readonly typeService: TypeService = new TypeService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getAllType(req: Request, res: Response) {
    try {
      const data = await this.typeService.getAllType();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "Tipos no encontrados");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
