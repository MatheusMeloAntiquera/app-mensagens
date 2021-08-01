import { createConnection } from "typeorm";

class Database {
  public async conectar() {
    await createConnection();
  }
}

export default new Database