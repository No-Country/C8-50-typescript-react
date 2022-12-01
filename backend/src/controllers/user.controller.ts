import { Request, Response } from "express";
import { HttpResponse } from "../config/HttpResponse";
import { User } from "../entities/User.entity";
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
  async loginUser(req: Request, res: Response){
    try {
      const user = await this.userService.emailUser(req.body.email)
      if(user){
        const password = this.userService.comparePassword(req.body.password, user.password)
        if(password){
          const token = this.userService.token(user)
          return this.httpResponse.Ok(res, {token: token})
        }
      }
      return this.httpResponse.Unauthorized(res, "No autorizado")
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async changeRol(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userService.findUserById(id);
      if (!user) {
        return this.httpResponse.NotFound(res, "Usuario no encontrado");
      }
      const userId = user.id
      const rolId = user.rol.id
      if(rolId !== "3") {
        await this.userService.changeRol(userId, rolId)
        return this.httpResponse.Ok(res);
      }else {
        const error = new Error("El rol no pudo ser modificado.");
        return this.httpResponse.Error(res, error);
      }
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
  
}
