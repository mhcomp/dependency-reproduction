import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModulesRepository } from './modules.repository';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { GraphNodesRepository } from '../graphNodes/graphNodes.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ModulesRepository, GraphNodesRepository]),
  ],
  providers: [ModulesService],
  controllers: [ModulesController],
  exports: [ModulesService],
})
export class ModulesModule {}
