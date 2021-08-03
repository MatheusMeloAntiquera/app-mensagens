import { Request, Response, NextFunction } from "express";
import { MensagemMongoRepository } from "@src/repositories/MensagemMongoRepository";
import { getCustomRepository } from "typeorm";
export class MensagemController {
  public async create(req: Request, res: Response) {

      const { from, target_id, media, message } = req.body;
      const mensagemMongoRepository = getCustomRepository(MensagemMongoRepository);
      const retorno = await mensagemMongoRepository.createAndSave({
        from,
        target_id,
        media,
        message,
      });

      console.log(retorno)
      res.json(retorno)
    
  }
}
