import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { Config } from "../config/config";



export class BaseService<T extends BaseEntity> extends Config {
  public repository: Promise<Repository<T>>;
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.repository = this.initRepository(getEntity);
  }

  async initRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Promise<Repository<T>> {
    const getConn = await this.dbInitialize;
    return getConn.getRepository(entity);
  }
}