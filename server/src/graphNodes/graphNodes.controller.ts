import { Controller } from '@nestjs/common';

import { GraphNodesService } from './graphNodes.service';

@Controller('graphNodes')
export class GraphNodesController {
  constructor(private readonly graphNodesService: GraphNodesService) {}
}
