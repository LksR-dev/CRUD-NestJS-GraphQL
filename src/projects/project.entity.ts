import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Status } from 'src/lib/enum-types';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import { Developer } from 'src/developers/developer.entity';
import { Role } from 'src/roles/role.entity';

@InputType('Project')
@Entity()
@ObjectType('Projects')
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  ID: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field(() => Status)
  status: Status;

  @Column('simple-array')
  @Field(() => [Int])
  rolesID: number[];

  @ManyToMany(() => Developer, (developer) => developer.projects)
  @Field(() => [Developer])
  developers: Developer[];

  @ManyToMany(() => Role, (role) => role.projects)
  @Field(() => [Role])
  roles: Role[];
}
