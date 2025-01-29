import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorFindDto } from './dto/author-find.dto';
import { AuthorCreateDto } from './dto/author-create.dto';
import { AuthorUpdateDto } from './dto/author-update.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private _authorsRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: AuthorCreateDto): Promise<Author> {
    const newAuthor = this._authorsRepository.create(createAuthorDto);
    return this._authorsRepository.save(newAuthor);
  }

  findAll(query: AuthorFindDto): Promise<Author[]> {
    console.log(query);
    return this._authorsRepository.find();
  }

  findOne(id: number): Promise<Author | null> {
    return this._authorsRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: AuthorUpdateDto): Promise<Author> {
    // First, find the user to ensure it exists
    const author = await this.findOne(id);
    if (!author) {
      throw new NotFoundException(`User with id=${id} not found`);
    }

    // Merge the existing user data with updated fields
    Object.assign(author, updateUserDto);

    // Save the updated user
    return this._authorsRepository.save(author);
  }

  async remove(id: number): Promise<void> {
    const result = await this._authorsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id=${id} not found`);
    }
  }
}
