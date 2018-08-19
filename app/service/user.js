'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async checkLogin(params) {
    console.log(params);
    return 'xxxxx';
    // const result = await this.ctx.curl(`${this.root}/topics`, {
    //   method: 'post',
    //   data: params,
    //   dataType: 'json',
    //   contentType: 'json',
    // });
    // const token = 'xxxx';
    // // 检查调用是否成功，如果调用失败会抛出异常
    // this.checkSuccess(result);
    // return token;
  }
}

module.exports = UserService;
