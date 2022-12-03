import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { FeatureService } from "../services/feature.service";

export class FeatureController {
  constructor(
    private readonly featureService: FeatureService = new FeatureService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getfeature(req: Request, res: Response) {
    try {
      const data = await this.featureService.getAllFeature();
      if (data.length === 0) {
        return this.httpResponse.NotFound(
          res,
          "No se Han Encontrado Caracteristicas"
        );
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
