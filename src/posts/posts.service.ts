import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { postsMocks } from './mock/posts.mock';
import { Author } from 'src/authors/entities/author.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async deletePosts(): Promise<void> {
    await this.postRepository.delete({});
  }

  async seed(authors: Author[]): Promise<Post[]> {
    const posts: Post[] = [];

    postsMocks.forEach((post, idx) => {
      const author = authors[Math.floor(idx / 2)];
      const postCreated = this.postRepository.create({ ...post, author });
      posts.push(postCreated);
    });

    await this.postRepository.save(posts);

    return posts;
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.find({ order: { created_at: 'ASC' } });
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });

    return post;
  }
}
