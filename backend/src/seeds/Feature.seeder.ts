import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Features } from "../entities/Feature.entity";

export class FeatureSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const featureRepository = dataSource.getRepository(Features);

    const featureData = [
      {
        title: "Baños",
      },
      {
        title: "Habitaciones",
      },
      {
        title: "Estacionamiento",
      },
      {
        title: "Niveles",
      },
    ];

    const newFeatures = featureRepository.create(featureData);
    await featureRepository.save(newFeatures);
  }
}