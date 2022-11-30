import { UserController } from "../controllers/user.controller";
import { Auth } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class UserRouter extends indexRouter<UserController,Auth>{
    constructor(){
        super(UserController,Auth)
    }

    routes(): void {
        this.router.get('/user', (req, res)=>this.controller.getAllUsers(req, res))
    }
}