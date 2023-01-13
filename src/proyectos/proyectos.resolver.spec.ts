import { Test, TestingModule } from '@nestjs/testing';
import { ProyectosResolver } from './proyectos.resolver';

describe('ProyectosResolver', () => {
  let resolver: ProyectosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProyectosResolver],
    }).compile();

    resolver = module.get<ProyectosResolver>(ProyectosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
