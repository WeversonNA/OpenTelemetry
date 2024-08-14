import { DataSourceOptions } from 'typeorm';
import { PostgresEntities } from '../entities/postgres-entities';

export const Options: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'openTelemetry',
  entities: PostgresEntities,
  synchronize: false,
};
