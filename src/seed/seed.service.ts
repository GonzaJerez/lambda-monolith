import { Injectable } from '@nestjs/common';
import { AuthorsService } from 'src/authors/authors.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  async seed(): Promise<void> {
    await this.postsService.deletePosts();
    await this.authorsService.deleteAuthors();

    const authors = await this.authorsService.seed();
    await this.postsService.seed(authors);
  }
}
