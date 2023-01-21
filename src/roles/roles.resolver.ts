import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateRoleInput } from './dto/create-role.input';
import { RolesService } from './roles.service';
import { Role } from './role.entity';

@Resolver()
export class RolesResolver {
  constructor(private rolesService: RolesService) {}
  @Mutation(() => Role)
  createRole(@Args('roleInput') roleInput: CreateRoleInput): Promise<Role> {
    return this.rolesService.create(roleInput);
  }
}
