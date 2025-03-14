import { Database } from './db-types'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const connectionOptions = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  max: 10,
};

const dialect = new PostgresDialect({
  pool: new Pool(connectionOptions),
});

export const db = new Kysely<Database>({
  dialect,
});
