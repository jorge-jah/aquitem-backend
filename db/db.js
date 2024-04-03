import { config } from "./config/index.js";

export const connection = async () => {
  try {
    await config.connect();

    console.log("PostgreSQL conectado com sucesso.");
  } catch (err) {
    console.log("Erro ao conectar com o banco de dados.", err);
  }
};
