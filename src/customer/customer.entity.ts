import {Column, Entity} from "typeorm";
import { BaseEntity } from '../_base/base.entity';

@Entity("customer")
export class Customer extends BaseEntity {

  @Column({ length: 100, nullable: true })
  name: string;

  @Column({ type: "int", nullable: true })
  mobileNumber: number;

  @Column({ length: 100, nullable: true })
  address: string;

  @Column({ length: 15, nullable: true })
  nic: string;

  @Column({ length: 100, nullable: true })
  idCopy: string;

  @Column({ length: 100, nullable: true })
  remark: string;
}
