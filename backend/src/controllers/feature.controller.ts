import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { Features } from "../entities/Feature.entity";
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

  async deleteFeature(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.featureService.findFeatureById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Feature not found by Id");
      }
      await this.featureService.delteFeature(Number(id));
      return this.httpResponse.Ok(res);
    } catch (error) {
        return this.httpResponse.Error(res, error)
    }
  }
}
