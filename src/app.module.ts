import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { SeedModule } from './seed/seed.module';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_NAME: Joi.string().required(),
        NODE_ENV: Joi.string().valid('prod', 'dev').required(),
        SERVER_MODE: Joi.string().valid('http', 'serverless').required(),
        DB_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
    AuthorsModule,
    PostsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
