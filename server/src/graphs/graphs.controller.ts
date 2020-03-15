import { Controller } from '@nestjs/common';

import { GraphsService } from './graphs.service';

@Controller('graphs')
export class GraphsController {
  constructor(private readonly graphsService: GraphsService) {}
}
