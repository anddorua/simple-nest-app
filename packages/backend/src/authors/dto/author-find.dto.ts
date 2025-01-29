import { IAuthor } from '../interfaces/author.interface';

export class AuthorFindDto implements Partial<IAuthor> {
  name?: string | undefined;
  dateOfBirth?: Date | undefined;
}
