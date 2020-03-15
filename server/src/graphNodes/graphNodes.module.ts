import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GraphNodesRepository } from './graphNodes.repository';
import { GraphNodesService } from './graphNodes.service';
import { GraphNodesController } from './graphNodes.controller';
import { GraphsModule } from '../graphs/graphs.module';
import { ModulesModule } from '../modules/modules.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GraphNodesRepository]),
    forwardRef(() => GraphsModule),
    ModulesModule,
  ],
  providers: [GraphNodesService],
  controllers: [GraphNodesController],
  exports: [GraphNodesService],
})
export class GraphNodesModule {}
