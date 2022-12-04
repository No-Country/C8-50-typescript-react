import { Operation } from "../entities/Operation.entity";
import { BaseService } from "./base.service";

export class OperationService extends BaseService<Operation> {
  constructor() {
    super(Operation);
  }
  async getAllOperation() {
    return (await this.repository).find({
      select: { id: true, title: true },
      withDeleted: false,
      order: { title: "ASC" },
    });
  }
}
