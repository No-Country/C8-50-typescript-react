import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { RealEstateService } from "../services/RealEstate.service";

export class RealEstateController {

  constructor(
    private readonly realEstateService: RealEstateService = new RealEstateService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getAllRealEstates(req: Request, res: Response) {
    try {
        const data = await this.realEstateService.getAllRealEstates();
        if (data.length === 0) {
          return this.httpResponse.NotFound(
            res,
            "No se han encontrado propiedades."
          );
        }
        return this.httpResponse.Ok(res, data);
      } catch (error) {
        return this.httpResponse.Error(res, error);
      }
  }

  async getRealEstateById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.realEstateService.findRealEstateById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Propiedad no encontrada");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  
}
}
