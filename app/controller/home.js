'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async test() {
    this.ctx.body = 'this is a test';
    console.log('====================================');
    console.log(this.ctx.session.name);
    console.log('====================================');
  }
}

module.exports = HomeController;
