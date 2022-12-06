import { RealEstate } from "./RealEstate.entity";
import { User } from "./User.entity";
import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity()
export class Comment extends BaseEntity {
  @Column({ type: "text" })
  comment: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.comment)
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.comment)
  user: User;
}
