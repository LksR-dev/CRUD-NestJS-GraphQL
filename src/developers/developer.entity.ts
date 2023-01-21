import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Project } from 'src/projects/project.entity';
import { Role } from 'src/roles/role.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';

@InputType('Developer')
@Entity()
@ObjectType('Developers')
export class Developer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  ID: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @ManyToMany(() => Project, (project) => project.developers)
  @Field(() => [Project])
  projects: Project[];

  @ManyToMany(() => Role, (role) => role.developers)
  @Field(() => [String])
  roles: string[];

  @Column('simple-array')
  @Field(() => [Int])
  roleID: number[];

  @Column('simple-array')
  @Field(() => [Int])
  projectID: number[];
}
