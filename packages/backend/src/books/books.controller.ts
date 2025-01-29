import { Controller, Get, Post, Query } from '@nestjs/common';
import { FindAllQueryDto } from './dto/find-all-query.dto';

@Controller('books')
export class BooksController {
  @Get()
  findAll(@Query() query: FindAllQueryDto) {
    // TODO: implement returning all filtered books
    console.log(query);
    return { ...query };
  }

  @Post()
  create() {
    //TODO: implement book query
  }
}
