'use strict';

const Controller = require('egg').Controller;
// const createRule = {
//   username: 'string',
//   password: 'string',
// };
class UserController extends Controller {
  async login() {
    const ctx = this.ctx;
    // ctx.validate(createRule, ctx.request.body);
    const token = await ctx.service.user.checkLogin(ctx.request.body);
    // this.ctx.body = ;
    ctx.body = token;
  }
  async regist() {
    this.ctx.body = 'fic';
  }
}

module.exports = UserController;
