import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ModulesRepository } from './modules.repository';
import { GraphNodesRepository } from '../graphNodes/graphNodes.repository';

@Injectable()
export class ModulesService {
  constructor(
    @InjectRepository(ModulesRepository)
    private readonly modulesRepository: ModulesRepository,
    @InjectRepository(GraphNodesRepository)
    private readonly graphNodesRepository: GraphNodesRepository,
  ) {}
}
