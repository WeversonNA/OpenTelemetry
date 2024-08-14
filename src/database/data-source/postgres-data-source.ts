import { DataSource } from 'typeorm';
import { Options } from './data-source.options';

export const PostgresDataSource = new DataSource({
  ...Options,
  migrations: ['src/database/migrations/**/*.ts'],
});

PostgresDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
