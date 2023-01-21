import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import { Developer } from 'src/developers/developer.entity';
import { Project } from 'src/projects/project.entity';

@InputType('Role')
@Entity()
@ObjectType('Roles')
export class Role {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  ID: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Developer, (developer) => developer.roles)
  @Field(() => [Developer])
  developers: Developer[];

  @ManyToMany(() => Project, (project) => project.roles)
  @Field(() => [Project])
  projects: Project[];
}
