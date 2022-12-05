import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { OperationService } from "../services/operation.service";

export class OperationController {
  constructor(
    private readonly operationService: OperationService = new OperationService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getAllOperation(req: Request, res: Response) {
    try {
      const data = await this.operationService.getAllOperation();
      if (data.length === 0) {
        return this.httpResponse.NotFound(
          res,
          "No Se Encontraron Tipos de Operacion"
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  async createOperation(req: Request, res: Response) {
    try {
      const data = await this.operationService.CreateOperation(req.body);
      if (!data) {
        return this.httpResponse.Forbidden(res, "No Autorizado");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
