
import { Photo } from 'src/photo/entities/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column() 
  firstName: string;

  @Column() 
  lastName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive?: boolean;

  @OneToMany(type => Photo, photo => photo.user)
  photos?: Photo[];
}
