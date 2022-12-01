import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../entities/User.entity";
import bcrypt from "bcrypt";

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const userData = [
      {
        firstName: "Matías",
        lastName: "Gonzáles",
        email: "mati@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Maty1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
      },
      {
        firstName: "Noelia",
        lastName: "Salazar",
        email: "noe@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Noe1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219989.png",
      },
      {
        firstName: "Luciano",
        lastName: "Rodríguez",
        email: "lucho@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Lucho1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/3003/3003035.png",
      },
      {
        firstName: "Rafael",
        lastName: "López",
        email: "rafa@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Rafa1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
      },
      {
        firstName: "Florencia",
        lastName: "Peñaloza",
        email: "flor@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Flor1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219989.png",
      },
      {
        firstName: "Javier",
        lastName: "Ortega",
        email: "javi@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Javi1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/3003/3003035.png",
      },
      {
        firstName: "Lucas",
        lastName: "Aranda",
        email: "lucas@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Lucas1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
      },
      {
        firstName: "Laura",
        lastName: "Monaco",
        email: "lau@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Lau1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219989.png",
      },
      {
        firstName: "David",
        lastName: "Mercado",
        email: "david@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("David1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/3003/3003035.png",
      },
      {
        firstName: "Juan",
        lastName: "Talquenca",
        email: "juan@gmail.com",
        telephone: "000000000000",
        password: await bcrypt.hashSync("Juan1234", 10),
        img: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
      },
    ];

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    await dataSource.createQueryBuilder().relation(User, "rol").of(3).set(3);
    await dataSource.createQueryBuilder().relation(User, "rol").of(1).set(2);
    await dataSource.createQueryBuilder().relation(User, "rol").of(2).set(1);
    await dataSource.createQueryBuilder().relation(User, "rol").of(4).set(2);
    await dataSource.createQueryBuilder().relation(User, "rol").of(5).set(1);
    await dataSource.createQueryBuilder().relation(User, "rol").of(6).set(2);
    await dataSource.createQueryBuilder().relation(User, "rol").of(7).set(1);
    await dataSource.createQueryBuilder().relation(User, "rol").of(8).set(2);
    await dataSource.createQueryBuilder().relation(User, "rol").of(9).set(1);
    await dataSource.createQueryBuilder().relation(User, "rol").of(10).set(2);
  }
}
