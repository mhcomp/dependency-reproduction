import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ModulesModule } from './modules/modules.module';
import { GraphsModule } from './graphs/graphs.module';
import { GraphNodesModule } from './graphNodes/graphNodes.module';

@Module({
  imports: [
    ModulesModule,
    GraphsModule,
    GraphNodesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'db',
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      logging: false,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
