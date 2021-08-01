import { Router } from "express";

export default class MensagemRoutes {
  protected router: Router;
  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
        res.json({"msg": "ok"})
    })
  }

  public getRouter(): Router {
    return this.router;
  }
}
