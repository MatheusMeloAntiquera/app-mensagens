import { Mensagem } from "@src/models/Mensagem";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Mensagem)
export class MensagemRepository extends Repository<Mensagem> {
  
}
