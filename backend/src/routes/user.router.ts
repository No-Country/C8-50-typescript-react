import { UserController } from "../controllers/user.controller";
import { JWT } from "../middlewares/auth.middleware";
import { indexRouter } from "./index.router";

export class UserRouter extends indexRouter<UserController,JWT>{
    constructor(){
        super(UserController,JWT)
    }

    routes(): void {
        this.router.get('/user', (req, res)=>this.controller.getAllUsers(req, res))
    }
}