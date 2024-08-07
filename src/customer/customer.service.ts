import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { CustomerDto } from "./dto/customer.dto";
import { Customer } from "./customer.entity";

@Injectable()
export class CustomerService {
  constructor(
    @InjectEntityManager()
    private entityManager: EntityManager
  ) {
  }

  async create(item: Customer): Promise<CustomerDto> {

    const inDb: Customer = await this.entityManager.findOneBy(Customer, { id: item?.id, nic: item?.nic });

    if (inDb) {
      throw new HttpException("This recode already exists", HttpStatus.BAD_REQUEST);
    }

    const entity: Customer = new Customer();
    entity.name = item.name;
    entity.mobileNumber = item.mobileNumber;
    entity.address = item.address;
    entity.nic = item.nic;
    entity.idCopy = item.idCopy;
    entity.remark = item.remark;

    return await this.entityManager.save(entity);
  }

  async getAll(): Promise<CustomerDto[]> {
    return await this.entityManager.find(Customer, {
      order: {
        id: "desc"
      }
    });
  }


}
