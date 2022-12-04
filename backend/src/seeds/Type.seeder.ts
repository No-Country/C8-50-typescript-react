import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Type } from "../entities/type.entity";

export class TypeSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const typeRepository = dataSource.getRepository(Type);

    const typeData = [
      {
        title: "Casa",
      },
      {
        title: "Departamento",
      },
      {
        title: "Oficina",
      },
    ];

    const newTypes = typeRepository.create(typeData);
    await typeRepository.save(newTypes);
  }
}