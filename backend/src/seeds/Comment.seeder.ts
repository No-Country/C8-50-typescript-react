import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Comment } from "../entities/Comment.entity";

export class CommentSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const comentRepository = dataSource.getRepository(Comment);
    const comentData = [
      {
        comment: "Deseo Mas Informacion De Esa Propiedad",
      },
      {
        comment: "Deseo Mas Informacion de esa propieda",
      },
      { comment: "La Casa Esta Libre De Hipotecas" },
    ];
    const newComent = comentRepository.create(comentData);
    await comentRepository.save(newComent);

    //Add User
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "user")
      .of(1)
      .set(1);
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "user")
      .of(2)
      .set(4);
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "user")
      .of(3)
      .set(6);
    //Add RealEstate
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "realEstate")
      .of(1)
      .set(1);
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "realEstate")
      .of(2)
      .set(2);
    await dataSource
      .createQueryBuilder()
      .relation(Comment, "realEstate")
      .of(3)
      .set(3);
  }
}
