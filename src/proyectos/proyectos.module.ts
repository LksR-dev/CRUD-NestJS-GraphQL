import { Module } from '@nestjs/common';
import { ProjectsService } from './proyectos.service';
import { ProyectosResolver } from './proyectos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsService, ProyectosResolver],
})
export class ProyectosModule {}
