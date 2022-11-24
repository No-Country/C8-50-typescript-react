import { UserController } from "../controllers/user.controller";
import { indexRouter } from "./index.router";

export class UserRouter extends indexRouter<UserController>{
    constructor(){
        super(UserController)
    }

    routes(): void {
        this.router.get('/user', (req, res)=>this.controller.getUsers(req, res))
    }
}