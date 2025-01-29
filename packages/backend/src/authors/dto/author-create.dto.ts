import { IsDate, IsString } from 'class-validator';
import { IAuthor } from '../interfaces/author.interface';
import { Type } from 'class-transformer';

export class AuthorCreateDto implements Partial<IAuthor> {
  @IsString()
  name: string;
  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;
}
