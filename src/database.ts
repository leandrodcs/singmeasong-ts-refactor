import pg from "pg";

const { Pool } = pg;

const dbConfig = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "singmeasong_dev",
};

const connection = new Pool(dbConfig);

export default connection;
