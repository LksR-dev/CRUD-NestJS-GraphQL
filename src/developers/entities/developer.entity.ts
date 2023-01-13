import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Project } from 'src/proyectos/proyecto.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Developer {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  ID: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Project, (project) => project)
  @Column('simple-array')
  @Field(() => [String])
  projects: string[];

  @Column('simple-array')
  @Field(() => [String])
  roles: string[];
}
