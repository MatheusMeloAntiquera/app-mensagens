import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class Mensagem {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  from: string;

  @Column()
  target_id: string;

  @Column()
  media: boolean;

  @Column()
  message: string;
}
