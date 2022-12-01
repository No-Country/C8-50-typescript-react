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
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const exist = yield this.userService.emailUser(body.email);
            if (exist !== null) {
                return this.httpResponse.NotFound(res, "Ya Existe ese email");
            }
            try {
                const data = yield this.userService.registerUser(body);
                if (data) {
                    const pass = this.userService.filterPasswordUser(data);
                    const tok = this.userService.token(data);
                    const resu = this.userService.juntar(tok, pass);
                    return this.httpResponse.Ok(res, resu);
                }
                return this.httpResponse.Forbidden(res, "No Autorizado");
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
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.emailUser(req.body.email);
                if (user) {
                    const password = this.userService.comparePassword(req.body.password, user.password);
                    if (password) {
                        const token = this.userService.token(user);
                        return this.httpResponse.Ok(res, { token: token });
                    }
                }
                return this.httpResponse.Unauthorized(res, "No autorizado");
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    changeRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.userService.findUserById(id);
                if (!user) {
                    return this.httpResponse.NotFound(res, "Usuario no encontrado");
                }
                const userId = user.id;
                const rolId = user.rol.id;
                if (rolId !== "3") {
                    yield this.userService.changeRol(userId, rolId);
                    return this.httpResponse.Ok(res);
                }
                else {
                    const error = new Error("El rol no pudo ser modificado.");
                    return this.httpResponse.Error(res, error);
                }
            }
            catch (error) {
                return this.httpResponse.Error(res, error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const data = yield this.userService.findUserById(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "Usuario no encontrado");
                }
                yield this.userService.deleteUser(id);
                return this.httpResponse.Ok(res);
            }
            catch (error) {
                console.error(error);
                return this.httpResponse.Error(res, error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { firstName, lastName, email, telephone, img } = req.body;
            const newData = { firstName, lastName, email, telephone, img };
            try {
                const data = yield this.userService.findUserById(id);
                if (!data) {
                    return this.httpResponse.NotFound(res, "Usuario no encontrado");
                }
                yield this.userService.updateUser(id, newData);
                return this.httpResponse.Ok(res);
            }
            catch (error) {
                console.error(error);
                return this.httpResponse.Error(res, error);
            }
        });
    }
}
exports.UserController = UserController;
