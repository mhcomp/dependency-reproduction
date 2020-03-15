import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GraphNodesRepository } from './graphNodes.repository';
import { GraphsService } from '../graphs/graphs.service';
import { ModulesService } from '../modules/modules.service';

@Injectable()
export class GraphNodesService {
  constructor(
    @InjectRepository(GraphNodesRepository)
    private readonly graphNodesRepository: GraphNodesRepository,
    private readonly graphsService: GraphsService,
    private readonly modulesService: ModulesService,
  ) {}
}
