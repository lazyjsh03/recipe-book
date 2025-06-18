import { Pool, QueryResult } from "pg";
import "dotenv/config";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

export default {
  query: (text: string, params: any[]): Promise<QueryResult> => {
    return pool.query(text, params);
  },
};
