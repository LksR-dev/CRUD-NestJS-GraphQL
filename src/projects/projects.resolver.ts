import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { Status } from 'src/lib/enum-types';
import { Developer } from 'src/developers/developer.entity';

@Resolver((of) => Project)
export class ProyectosResolver {
  constructor(private projectsService: ProjectsService) {}

  @Query(() => [Project])
  findAllProjects(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Query(() => [Project])
  filterProjectByRol(@Args('rol') rol: string): Promise<Project[]> {
    return this.projectsService.filterByRol(rol);
  }

  @Query(() => [Project])
  filterProjectByStatus(@Args('status') status: Status): Promise<Project[]> {
    return this.projectsService.filterByStatus(status);
  }

  @Mutation(() => Project)
  createProject(
    @Args('projectInput') projectInput: CreateProjectInput,
  ): Promise<Project> {
    return this.projectsService.createProject(projectInput);
  }

  @ResolveField(() => [Developer])
  async developersOnTheProject(
    @Parent() project: Project,
  ): Promise<Developer[]> {
    return await this.projectsService.getDeveloper(project.ID);
  }
}
