import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsArray } from 'class-validator';

@InputType()
export class CreateDeveloperInput {
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsArray()
  @Field(() => [Int])
  projectID: number[];

  @IsArray()
  @Field(() => [Int])
  roleID: number[];
}
