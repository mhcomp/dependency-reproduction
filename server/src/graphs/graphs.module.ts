import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GraphsRepository } from './graphs.repository';
import { GraphsService } from './graphs.service';
import { GraphsController } from './graphs.controller';
import { GraphNodesModule } from '../graphNodes/graphNodes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GraphsRepository]),
    forwardRef(() => GraphNodesModule),
  ],
  providers: [GraphsService],
  controllers: [GraphsController],
  exports: [GraphsService],
})
export class GraphsModule {}
