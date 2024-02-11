import { Author } from 'src/authors/entities/author.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  last_update: Date;

  @Column({
    type: 'text',
  })
  title: string;

  @Column({
    type: 'text',
  })
  body: string;

  @ManyToOne(() => Author, (author) => author.posts, { eager: true })
  author: Author;
}
