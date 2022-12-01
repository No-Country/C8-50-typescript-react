import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Rol } from "../entities/Rol.entity";
import bcrypt from 'bcrypt'

export class RolSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const rolRepository = dataSource.getRepository(Rol);

    const roles = [
        {
            id: "1",
            name: "customer",
            description: "Usuario normal con permisos básicos",
        },{
            id: "2",
            name: "admin",
            description: "Administrador con permisos parciales",
        },{
            id: "3",
            name: "superAdmin",
            description: "Administrador con permisos totales",
        }
    ]

    const allRoles = rolRepository.create(roles)
    await rolRepository.save(allRoles)
  }
}
