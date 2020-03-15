import { EntityRepository, Repository } from 'typeorm';

import { Module } from './module.entity';

@EntityRepository(Module)
export class ModulesRepository extends Repository<Module> {}
