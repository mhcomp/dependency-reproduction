import { EntityRepository, Repository } from 'typeorm';

import { Graph } from './graph.entity';

@EntityRepository(Graph)
export class GraphsRepository extends Repository<Graph> {}
