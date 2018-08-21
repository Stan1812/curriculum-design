'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async checkLogin(params) {
    const res = await this.ctx.model.User.findOne({
      where: { username: params.username },
    });
    return res;
  }
  async createUser(params) {
    const { username, password } = params;
    const User = this.ctx.model.User;
    const res = await User.findOne({ where: { username } });
    if (!res) {
      const createRes = User.create({
        username,
        password,
      });
      return createRes;
    }
  }
}

module.exports = UserService;
