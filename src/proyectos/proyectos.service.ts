import { Injectable } from '@nestjs/common';
import { Project } from './proyecto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { toLowerCaseAndTrim } from 'src/lib/tratamiento-string';
import { Status } from 'src/lib/enum-types';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>,
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
}
