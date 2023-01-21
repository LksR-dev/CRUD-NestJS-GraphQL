import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from 'src/lib/enum-types';
import { toLowerCaseAndTrim } from 'src/lib/tratamiento-string';
import { CreateProjectInput } from './dto/create-project.input';
import { DevelopersService } from 'src/developers/developers.service';
import { Developer } from 'src/developers/developer.entity';
import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
    private developersService: DevelopersService,
  ) {}

  async findAll(): Promise<Project[]> {
    return await this.projectsRepository.find();
  }

  async filterByRol(rol: string): Promise<Project[]> {
    const allProjects = await this.projectsRepository.find();
    return allProjects.filter((project): Project | string => {
      for (let index = 0; index < project.roles.length; index++) {
        if (
          toLowerCaseAndTrim(project.roles[index]) === toLowerCaseAndTrim(rol)
        ) {
          return project;
        } else {
          throw new Error('No hay proyectos con este rol actualmente');
        }
      }
    });
  }

  async filterByStatus(status: Status): Promise<Project[]> {
    const allProjects = await this.projectsRepository.find();
    return allProjects.filter((project): Project | string => {
      if (project.status.valueOf() === status.valueOf()) {
        return project;
      } else {
        throw new Error('No hay proyectos con este estado actualmente');
      }
    });
  }

  async createProject(project: CreateProjectInput): Promise<Project> {
    const newProject = this.projectsRepository.create(project);
    return this.projectsRepository.save(newProject);
  }

  getDeveloper(projectID: number): Promise<Developer[]> {
    return this.developersService.findAllDevelopersByProject(projectID);
  }
}
