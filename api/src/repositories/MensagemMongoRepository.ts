import { Mensagem } from "@src/models/Mensagem";
import {
  EntityRepository,
  MongoRepository,
  MongoEntityManager,
  ObjectID,
} from "typeorm";

interface IMensagem {
  id?: ObjectID;
  from: string;
  target_id: string;
  media: boolean;
  message: string;
}

@EntityRepository(Mensagem)
export class MensagemMongoRepository {
  constructor(private mongoManager: MongoEntityManager) {}
  public async createAndSave({
    from,
    target_id,
    media,
    message,
  }: IMensagem): Promise<Mensagem> {
    const mensagem = this.mongoManager.create(Mensagem, {
      from,
      target_id,
      media,
      message,
    });
    await this.mongoManager.save(mensagem);
    return mensagem;
  }
}
