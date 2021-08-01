import { Mensagem } from "@src/models/mensagem.model";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Mensagem)
export class MensagemRepository extends Repository<Mensagem> {
  
}
