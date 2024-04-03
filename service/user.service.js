import { connection } from "../db/db.js";

const getAllCategories = async () => {
  const query = "SELECT * FROM categorias";
  const { rows } = await connection.query(query);
  return rows[0];
};

export { getAllCategories };
