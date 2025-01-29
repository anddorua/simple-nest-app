import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { IBook } from "../interfaces/book.interface";
import { Author } from "../../authors/entities/author.entity";

@Entity()
export class Book implements IBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany((type) => Author,  (author) => author.books)
  @JoinTable()
  authors: Author[];
}