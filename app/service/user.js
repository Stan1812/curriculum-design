'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async checkLogin(params) {
    const res = await this.ctx.model.User.findOne({
      where: { name: params.username },
    });
    return res;
  }
  async createUser(params) {
    const { username, password } = params;
    const User = this.ctx.model.User;
    const res = await User.findOne({ where: { name: username } });
    // console.log('find:', res.dataValues);
    if (!res) {
      const createRes = User.create({
        name: username,
        password: password, //eslint-disable-line
      });
      console.log('insert success');
      return createRes;
    }
  }
}

module.exports = UserService;
