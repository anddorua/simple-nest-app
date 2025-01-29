import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AuthorFindDto } from './dto/author-find.dto';
import { AuthorsService } from './authors.service';
import { AuthorCreateDto } from './dto/author-create.dto';
import { Author } from './entities/author.entity';
import { AuthorUpdateDto } from './dto/author-update.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private _authorsService: AuthorsService) {}

  @Post()
  create(@Body() createUserDto: AuthorCreateDto): Promise<Author> {
    return this._authorsService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<Author[]> {
    return this._authorsService.findAll({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Author> {
    const result = await this._authorsService.findOne(id);
    if (!result) {
      throw new NotFoundException(`User with id=${id} not found`);
    }
    return result;
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() authorUpdateDto: AuthorUpdateDto,
  ): Promise<Author> {
    return this._authorsService.update(id, authorUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this._authorsService.remove(id);
  }
}
