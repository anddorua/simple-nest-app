import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "@service/backend/src/books/entities/book.entity";
import { Author } from "@service/backend/src/authors/entities/author.entity";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Book, Author],

  synchronize: false,
  logging: false,
  migrations: ["./src/migrations/*.ts"],
  subscribers: [],
});

export default AppDataSource;
