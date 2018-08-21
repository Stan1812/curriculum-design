'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    const user = await ctx.service.user.checkLogin(ctx.request.body);
    if (!user) {
      ctx.helper.failed({ ctx, msg: 'login failed' });
    } else {
      ctx.session = user.dataValues;
      const { id, username } = user;
      ctx.helper.success({ ctx, res: { id, username }, msg: 'login success' });
    }
  }
  async regist() {
    const ctx = this.ctx;
    const res = await ctx.service.user.createUser(ctx.request.body);
    if (res) {
      ctx.helper.success({ ctx, msg: 'regist success' });
    } else {
      ctx.helper.failed({ ctx, msg: 'user already exists' });
    }
  }
}

module.exports = UserController;
