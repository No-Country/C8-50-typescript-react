import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { SeederOptions} from "typeorm-extension";
import * as dotenv from "dotenv";
import { MainSeeder } from "./seeds/Main.seeder";



dotenv.config({
    path:
      process.env.NODE_ENV !== undefined
        ? `.${process.env.NODE_ENV.trim()}.env`
        : ".env",
  });

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/**/*.migrations{.ts,.js}"],
  synchronize: true,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
  seeds: [MainSeeder]
}

export const PostgresDataSource = new DataSource(options);