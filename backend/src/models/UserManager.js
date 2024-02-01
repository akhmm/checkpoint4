const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async getByUsername(username) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE username=?`,
      [username]
    );
    return result[0];
  }
}

module.exports = UserManager;
