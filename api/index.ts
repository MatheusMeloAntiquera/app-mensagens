import express from "express";
import cors from "cors";

import { rotas } from "@src/routes/rotas";

const app = express();
const porta = process.env.PORTA;

app.use(cors());
app.use(express.json());

app.use(rotas);

app.listen(porta, () => {
  console.log(`Escutando a porta ${porta}`);
});
