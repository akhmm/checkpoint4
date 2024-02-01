const AbstractManager = require("./AbstractManager");

class MenuManager extends AbstractManager {
  constructor() {
    super({ table: "menu" });
  }

  async readAll() {
    const [result] = await this.database.query(`SELECT * FROM ${this.table}`);
    return result;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async create({ name, image, price, description }) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, image, price, description) VALUES (?,?,?,?)`,
      [name, image, price, description]
    );
    return result;
  }

  async update({ id, image, name, price, description }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name=?, image=?, price=?, description=? WHERE id=?`,
      [name, image, price, description, id]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }
}

module.exports = MenuManager;
