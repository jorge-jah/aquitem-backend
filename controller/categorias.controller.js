import { getAllCategories } from "../service/user.service.js";

export const rotasCategorias = (app) => {
  app.get("/categorias", getAllCategories);
};
