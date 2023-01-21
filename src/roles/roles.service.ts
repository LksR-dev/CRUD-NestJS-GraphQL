import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { CreateRoleInput } from './dto/create-role.input';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async create(createRoleInput: CreateRoleInput): Promise<Role> {
    const newRole = await this.roleRepository.create(createRoleInput);
    return this.roleRepository.save(newRole);
  }
}
