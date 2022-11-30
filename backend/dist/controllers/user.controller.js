"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const HttpResponse_1 = require("../config/HttpResponse");
const user_service_1 = require("../services/user.service");
class UserController {
    constructor(userService = new user_service_1.UserService(), httpResponse = new HttpResponse_1.HttpResponse()) {
        this.userService = userService;
        this.httpResponse = httpResponse;
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userService.findAllUser();
                if (data.length === 0) {
                    return this.httpResponse.NotFound(res, "No se han encontrado usuarios");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.findUserById(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "Usuario no encontrado");
                }
                return this.httpResponse.Ok(res, data);
            }
            catch (error) {
                console.error(error);
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.UserController = UserController;
