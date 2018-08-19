'use strict';

const Controller = require('egg').Controller;
// const createRule = {
//   username: 'string',
//   password: 'string',
// };
class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    const user = await ctx.service.user.checkLogin(ctx.request.body);
    if (!user) {
      ctx.body = { status: 0, message: 'login failed' };
    } else {
      console.log('session', ctx.session);
      ctx.body = { status: 1, message: 'login success' };
    }
  }
  async regist() {
    const ctx = this.ctx;
    const res = await ctx.service.user.createUser(ctx.request.body);
    console.log(res);
    if (res) {
      ctx.body = { status: 1, message: 'registe success' };
    } else {
      ctx.body = { status: 0, message: 'user already exists' };
    }
  }
}

module.exports = UserController;
