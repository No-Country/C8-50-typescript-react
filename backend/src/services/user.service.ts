import { User } from "../entities/User.entity";
import { BaseService } from "./base.service";
import bcrypt from "bcrypt";
import { Auth } from "../middlewares/auth.middleware";
import { DataSource } from "typeorm";

export class UserService extends BaseService<User> {
  private readonly mid: Auth = new Auth();
  constructor() {
    super(User);
  }

  async findAllUser(): Promise<User[]> {
    return (await this.repository).find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        img: true,
      },
      withDeleted: false,
      order: {
        lastName: "ASC",
      },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    return (await this.repository).findOne({
      where: { id: id },
      select: {
        deleteAt: false,
      },
      relations: { rol: true },
      withDeleted: false,
    });
  }
  filterPasswordUser(user: User) {
    const response = {
      id: user.id,
      firsname: user.firstName,
      lastname: user.lastName,
      email: user.email,
      telephone: user.telephone,
    };
    return response;
  }
  token(user: any) {
    const token = this.mid.createToken(user, user.id);
    return token;
  }
  juntar(tok: string, user: any) {
    const dat = {
      data: user,
      Token: tok,
    };
    return dat;
  }
  async registerUser(body: User) {
    body.password = bcrypt.hashSync(
      body.password,
      String(bcrypt.genSaltSync(8))
    );
    return (await this.repository).save(body);
  }
  async emailUser(emails: string) {
    const dat = (await this.repository).findOneBy({ email: emails });
    return dat;
  }
  comparePassword(password: string, passworduser: string) {
    const math: boolean = bcrypt.compareSync(password, passworduser);
    return math;
  }

  async changeRol(userId: string, rolId: string) {
    if (rolId === "1") {
      (await this.repository)
        .createQueryBuilder()
        .relation(User, "rol")
        .of(userId)
        .set(2);
    } else if (rolId === "2") {
      (await this.repository)
        .createQueryBuilder()
        .relation(User, "rol")
        .of(userId)
        .set(1);
    } else {
      return;
    }
  }

  async deleteUser(id: string) {
    (await this.repository)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where({ id: id })
      .execute();
  }

  async updateUser(id: string, newData : any) {
    (await this.repository)
      .createQueryBuilder()
      .update(User)
      .set(newData)
      .where({ id: id })
      .execute();
  }
}
