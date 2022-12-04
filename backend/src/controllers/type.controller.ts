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
        return this.httpResponse.NotFound(
          res,
          "Tipos de propiedades no encontrados"
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  async deleteTypeById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.typeService.findTypeById(id);
      if (!data) {
        return this.httpResponse.NotFound(
          res,
          "No se encontraron tipos de propiedades"
        );
      }
      await this.typeService.deleteType(id);
      return this.httpResponse.Ok(res);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  async createType(req: Request, res: Response) {
    try {
      const data = await this.typeService.createType(req.body);
      if (!data) {
        return this.httpResponse.Forbidden(res, "No Autorizado");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
