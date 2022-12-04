import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Operation } from "../entities/Operation.entity";

export class OperationSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const operationRepository = dataSource.getRepository(Operation);

    const operationData = [
      {
        title: "Venta",
      },
      {
        title: "Alquiler",
      },
    ];

    const newOperations = operationRepository.create(operationData);
    await operationRepository.save(newOperations);
  }
}