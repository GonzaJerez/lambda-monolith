import { Injectable } from '@nestjs/common';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { authorsMocks } from './mock/authors.mock';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async deleteAuthors(): Promise<void> {
    await this.authorRepository.delete({});
  }

  async seed(): Promise<Author[]> {
    const authors: Author[] = [];

    authorsMocks.forEach((author) => {
      const authorCreated = this.authorRepository.create(author);
      authors.push(authorCreated);
    });

    await this.authorRepository.save(authors);

    return authors;
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find({ relations: ['posts'] });
  }

  findOne(id: string): Promise<Author> {
    const author = this.authorRepository.findOne({
      where: { id },
      relations: ['posts'],
    });

    return author;
  }
}
