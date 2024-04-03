import pg from "pg";

const { Pool } = pg;

export const config = new Pool({
  //   user: "postgres",
  //   host: "localhost",
  //   database: "postgres",
  //   password: "admin",
  //   port: 5432,
});
