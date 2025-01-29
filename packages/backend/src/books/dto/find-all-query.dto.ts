import { IsOptional, IsString } from 'class-validator';

export class FindAllQueryDto {
  @IsString()
  @IsOptional()
  author?: string;
  @IsString()
  @IsOptional()
  title?: string;
}
