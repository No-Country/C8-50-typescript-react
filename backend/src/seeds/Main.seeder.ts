import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import { RolSeeder } from "./Rol.seeder";
import { UserSeeder } from "./User.seeder";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        await runSeeder(dataSource, RolSeeder)
        await runSeeder(dataSource, UserSeeder)
    }

}