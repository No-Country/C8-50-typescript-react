import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { UserService } from "../services/user.service";


export class UserController {

  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getAllUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUser();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No se han encontrado usuarios");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  async registerUser(req: Request, res: Response){
      const body = req.body
      const exist = await this.userService.emailUser(body.email)
      if(exist !== null){
        return this.httpResponse.NotFound(res, "Ya Existe ese email")
      }
      try {
      const data = await this.userService.registerUser(body)
      if(data){
        const pass = this.userService.filterPasswordUser(data)
        const tok = this.userService.token(data)
        const resu = this.userService.juntar(tok, pass)
        return this.httpResponse.Ok(res, resu)
      }
      return this.httpResponse.Forbidden(res, "No Autorizado")
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }

  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.userService.findUserById(id);
      if (!data) {
        return this.httpResponse.NotFound(res, "Usuario no encontrado");
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  
}
