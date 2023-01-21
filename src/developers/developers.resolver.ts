import { Resolver, Query, Mutation, Args, Int, Parent } from '@nestjs/graphql';
import { DevelopersService } from './developers.service';
import { Developer } from './developer.entity';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';

@Resolver((of) => Developer)
export class DevelopersResolver {
  constructor(private readonly developersService: DevelopersService) {}

  @Mutation(() => Developer)
  createDeveloper(
    @Args('createDeveloperInput') createDeveloperInput: CreateDeveloperInput,
  ) {
    return this.developersService.create(createDeveloperInput);
  }

  @Query(() => [Developer])
  findAllDevs() {
    return this.developersService.findAll();
  }

  @Query(() => [Developer])
  findAllDevsByProject(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Developer[]> {
    return this.developersService.findAllDevelopersByProject(id);
  }

  @Query(() => Developer)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.developersService.findOne(id);
  }

  @Mutation(() => Developer)
  updateDeveloper(
    @Args('updateDev')
    updateDev: UpdateDeveloperInput,
  ) {
    return this.developersService.update(updateDev);
  }
}
