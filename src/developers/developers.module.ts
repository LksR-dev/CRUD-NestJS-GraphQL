import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersResolver } from './developers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './entities/developer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  providers: [DevelopersResolver, DevelopersService],
})
export class DevelopersModule {}
