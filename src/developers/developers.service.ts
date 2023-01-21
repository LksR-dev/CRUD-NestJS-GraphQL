import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { Developer } from './developer.entity';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async create(createDeveloperInput: CreateDeveloperInput): Promise<Developer> {
    const newDev = this.developerRepository.create(createDeveloperInput);
    return this.developerRepository.save(newDev);
  }

  findAll() {
    return this.developerRepository.find();
  }

  async findAllDevelopersByProject(id: number): Promise<Developer[]> {
    const allDevs = await this.developerRepository.find();
    return allDevs.filter((dev) => {
      for (let i = 0; i < dev.projectID.length; i++) {
        if (dev.projectID[i] == id) return dev;
      }
    });
  }

  findOne(id: number): Promise<Developer> {
    return this.developerRepository.findOne({
      where: {
        ID: id,
      },
    });
  }

  async update(updateDev) {
    const { ID, projectID } = updateDev;
    try {
      this.developerRepository.update(ID, {
        projectID: [...projectID],
      });
      console.log('The developer has been updated');

      return 'The developer has been updated';
    } catch (e) {
      console.log('Error to update dev');
      throw new Error(e);
    }
  }
}
