import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Quantity } from "../entities/Quantity.entity";

export class QuantitySeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const quantityRepository = dataSource.getRepository(Quantity);

    const quantityData = [
      {
        quantity: 5,
      },
      {
        quantity: 5,
      },
      {
        quantity: 2,
      },
      {
        quantity: 2,
      },
      {
        quantity: 1,
      },
      {
        quantity: 2,
      },
      {
        quantity: 1,
      },
      {
        quantity: 1,
      },
    ];

    const newQuantities = quantityRepository.create(quantityData);
    await quantityRepository.save(newQuantities);

    //Add quantities to features
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(1)
      .set(1);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(1)
      .set(1);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(2)
      .set(1);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(2)
      .set(2);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(3)
      .set(2);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(3)
      .set(1);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(4)
      .set(2);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(4)
      .set(2);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(5)
      .set(2);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(5)
      .set(3);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(6)
      .set(2);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(6)
      .set(4);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(7)
      .set(3);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(7)
      .set(1);

    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "realEstate")
      .of(8)
      .set(3);
    await dataSource
      .createQueryBuilder()
      .relation(Quantity, "feature")
      .of(8)
      .set(2);
  }
}
