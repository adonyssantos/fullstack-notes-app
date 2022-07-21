import { createConnection } from 'mysql';
import config from './config.js';

const database = createConnection(config.db);

export default database;
