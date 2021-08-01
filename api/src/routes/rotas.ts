import { mensagemRouter } from "@src/routes/mensagem";
import { Router } from "express";

const router = Router();

router.use("/mensagem", mensagemRouter);

export { router as rotas };
