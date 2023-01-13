import { Field, InputType } from '@nestjs/graphql';
import { Status } from 'src/lib/enum-types';
import { IsNotEmpty, Min, Max } from 'class-validator';
import { Developer } from 'src/developers/entities/developer.entity';

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

  @IsNotEmpty({
    message: 'Debes asignar desarrolladores.',
  })
  @Field(() => [String])
  developers: string[];

  @IsNotEmpty({
    message: 'Debes colocar un rol.',
  })
  @Field(() => [String])
  roles: string[];
}
