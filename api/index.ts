import "reflect-metadata";
import express from "express";
import cors from "cors";

import Routes from "@src/routes/Routes";
import Database from "./database";

console.log('aqui')
Database.conectar().then((conexao) => {
  console.log("Conexão com banco realizada");

  const app = express();
  const porta = process.env.PORTA;

  app.use(cors());
  app.use(express.json());

  app.use(new Routes().getRoutes());

  app.listen(porta, () => {
    console.log(`Escutando a porta ${porta}`);
  });
});
