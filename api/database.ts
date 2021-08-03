import { createConnection, Connection } from "typeorm";

class Database {
  /**
   * Conecta
   */
  public async conectar(): Promise<Connection> {
    return createConnection();
  }
}

export default new Database