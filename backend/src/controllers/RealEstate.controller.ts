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

  async updateRealEstate(req: Request, res: Response) {
    const { id } = req.params;
    const { name, price, image, country, city, latitude, longitude } = req.body;
    const newData = { name, price, image, country, city, latitude, longitude };
    try {
      const data = await this.realEstateService.findRealEstateById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Propiedad no encontrada");
      }
      await this.realEstateService.updateRealEstate(id, newData);
      return this.httpResponse.Ok(res);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
  async deleteRealEstate(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.realEstateService.findRealEstateById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Propiedad no encontrada");
      }
      await this.realEstateService.deleteRealEstate(id)
      return this.httpResponse.Ok(res);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
  async createRealEstate(req: Request, res: Response) {
    try {
      const {newRealEstate, userId, typeId, operationId} = req.body
      const data = await this.realEstateService.createRealEstate(newRealEstate, userId, typeId, operationId);
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  async findComentByIdRealState(req: Request, res: Response){
    const { id } = req.params;
    try {
      const data = await this.realEstateService.findComentIntRealstate(id);
      if(!data){
        return this.httpResponse.NotFound(res, "No Se Encontraron Comentarios")
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
