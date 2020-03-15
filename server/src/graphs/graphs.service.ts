import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { GraphsRepository } from './graphs.repository';
import { GraphNodesService } from '../graphNodes/graphNodes.service';

@Injectable()
export class GraphsService {
  constructor(
    @InjectRepository(GraphsRepository)
    private readonly graphsRepository: GraphsRepository,
    private readonly graphNodesService: GraphNodesService,
  ) {}
}
