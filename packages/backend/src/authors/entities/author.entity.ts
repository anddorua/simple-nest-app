import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { IAuthor } from "../interfaces/author.interface";
import { Book } from "../../books/entities/book.entity";

@Entity()
export class Author implements IAuthor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column('date')
  dateOfBirth: Date;

  @ManyToMany((type) => Book, (book) => book.authors)
  books: Book[]
}