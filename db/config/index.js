import pg from "pg";

const { Pool } = pg;

export const config = new Pool({
  user: "dbajorge",
  //   host: "postgres://dbajorge:qPL2cmUWsFkivfomYrHBzDqlOj0pKAjd@dpg-co67f1ol5elc73ad71s0-a.oregon-postgres.render.com/db_aquitem",
  //   host: "postgres://dbajorge:qPL2cmUWsFkivfomYrHBzDqlOj0pKAjd@dpg-co67f1ol5elc73ad71s0-a/db_aquitem",
  //   database: "db_aquitem",
  //   password: "qPL2cmUWsFkivfomYrHBzDqlOj0pKAjd",
  //   port: 5432,
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432,
});
