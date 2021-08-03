import { Router } from "express";
import { MensagemController } from '@src/controllers/MensagemController';
import RoutesAbstract from "@src/routes/RoutesAbstract";

export default class MensagemRoutes extends RoutesAbstract {
  protected router: Router;
  private mensagemController: MensagemController;
  constructor() {
    super();
    this.mensagemController = new MensagemController();
    this.router = Router();
    this.setRotas();
  }

  setRotas() {
    this.router.post("/", this.mensagemController.create);
  }

  public getRouter(): Router {
    return this.router;
  }
}
