import { CreateDeveloperInput } from './create-developer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsArray, IsInt } from 'class-validator';

@InputType()
export class UpdateDeveloperInput {
  @IsInt()
  @Field(() => Int)
  ID: number;

  @IsArray()
  @Field(() => [Int])
  projectID: number[];
}
