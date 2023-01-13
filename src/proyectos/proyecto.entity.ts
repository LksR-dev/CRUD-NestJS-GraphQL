import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Status } from 'src/lib/enum-types';
import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import { Developer } from 'src/developers/entities/developer.entity';
// import { Role } from 'src/roles/role.entity';

@Entity()
@ObjectType()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
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

  @ManyToMany(() => Developer, (developer) => developer)
  @Column('simple-array')
  @Field(() => [String])
  developers: string[];

  @Column('simple-array')
  @Field(() => [String])
  roles: string[];
}
