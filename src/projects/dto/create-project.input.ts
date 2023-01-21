import { Field, InputType, Int } from '@nestjs/graphql';
import { Status } from 'src/lib/enum-types';
import { IsNotEmpty, Min, Max, IsArray } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @IsNotEmpty({
    message: 'Debes colocar un nombre.',
  })
  @Field()
  name: string;

  @IsNotEmpty({
    message: 'Debes colocar una descripción.',
  })
  @Field()
  description: string;

  @Min(0)
  @Max(1)
  @Field()
  status: Status;

  @IsArray()
  @Field(() => [Int])
  rolesID: number[];
}
