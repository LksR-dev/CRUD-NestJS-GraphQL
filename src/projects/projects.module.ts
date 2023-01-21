import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProyectosResolver } from './projects.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { DevelopersModule } from 'src/developers/developers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), DevelopersModule],
  providers: [ProjectsService, ProyectosResolver],
  exports: [ProjectsService],
})
export class ProjectsModule {}
