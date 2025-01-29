import { IAuthor } from '../interfaces/author.interface';

export class AuthorUpdateDto implements Partial<IAuthor> {
  name?: string;
  dateOfBirth?: Date;
}
