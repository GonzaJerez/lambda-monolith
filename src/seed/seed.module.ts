import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthorsModule } from 'src/authors/authors.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AuthorsModule, PostsModule],
})
export class SeedModule {}
