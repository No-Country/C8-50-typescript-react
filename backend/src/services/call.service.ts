import { Call } from "../entities/Call.entity";
import { BaseService } from "./base.service";

export class CallService extends BaseService<Call> {
  constructor() {
    super(Call);
  }
  async CreateCall(body: Call) {
    return (await this.repository).save(body);
  }
}
