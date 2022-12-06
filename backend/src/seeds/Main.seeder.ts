import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import { FeatureSeeder } from "./Feature.seeder";
import { OperationSeeder } from "./Operation.seeder";
import { QuantitySeeder } from "./Quantity.seeder";
import { RealEstateSeeder } from "./RealEstate.seeder";
import { RolSeeder } from "./Rol.seeder";
import { TypeSeeder } from "./Type.seeder";
import { UserSeeder } from "./User.seeder";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        await runSeeder(dataSource, RolSeeder)
        await runSeeder(dataSource, UserSeeder)
        await runSeeder(dataSource, TypeSeeder)
        await runSeeder(dataSource, OperationSeeder)
        await runSeeder(dataSource, FeatureSeeder)
        await runSeeder(dataSource, RealEstateSeeder)
        await runSeeder(dataSource, QuantitySeeder)

    }

}