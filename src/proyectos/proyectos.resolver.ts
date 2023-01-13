import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectsService } from './proyectos.service';
import { Project } from './proyecto.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { Status } from 'src/lib/enum-types';

@Resolver()
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
}
