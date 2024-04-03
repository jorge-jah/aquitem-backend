import fastify from "fastify";
import cors from "@fastify/cors";
import { connection } from "./db/db.js";
// import { config } from "./db/config/index.js";
import { env } from "node:process";

const app = fastify({
  logger: false,
});

const PORT = 3000;
// const HOST = `localhost`;

app.register(cors, {
  orign: "*",
});

connection();

app.get("/", (req, res) => {
  res.send({
    code: 200,
    status: "UP",
    message: "Server is OK!",
  });
});

app.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
  app.log.info(`Server listening on ${address}`);
  console.log(`Server is now listenig on machine IP: ${address}`);
});
