import MensagemRoutes from "@src/routes/MensagemRoutes";
import { Router } from "express";

export default class Routes {
    private routes: Router = Router();
    constructor(){
        this.routes.use("/mensagem", new MensagemRoutes().getRouter());
    }
    
    public getRoutes(): Router{
        return this.routes;
    }
}