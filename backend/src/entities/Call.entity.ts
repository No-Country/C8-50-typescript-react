import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealEstate } from "./RealEstate.entity";
import { User } from "./User.entity";

@Entity()
export class Call extends BaseEntity {
  @Column()
  date: Date;

  @Column({ type: "text" })
  description: string;

  @ManyToOne(() => User, (user) => user.call)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.call)
  realEstate: RealEstate;
}
