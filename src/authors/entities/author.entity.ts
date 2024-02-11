import { Post } from 'src/posts/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'authors' })
export class Author {
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
  name: string;

  @Column({
    type: 'text',
  })
  last_name: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];
}
