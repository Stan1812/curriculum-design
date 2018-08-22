'use strict';
// 爬虫缓存一些官网的数据
const Service = require('egg').Service;
const cheerio = require('cheerio');

class SpiderService extends Service {
  constructor(ctx) {
    super(ctx);
    this.basePath = 'http://zjc.ncu.edu.cn/jy/index.php?';
  }
  async getAllPosts() {
    const result = await this.ctx.curl(`${this.basePath}`);
    const $ = cheerio.load(result.body);
    const data = $('.posts');
    console.log(data);
    data.map(e => this.getOnePost(e)); // 此处为并行
  }
  async getOnePost(id) {
    const result = await this.ctx.curl(`${this.basePath}c=article&id=${id}`, {
      method: 'get',
      dataType: 'json',
      contentType: 'json',
    });
    const $ = cheerio.load(result.body);
    const data = $('.popular-books .bd li .info', '#content');
    data.each(element => {
      const $element = $(element);
      const name = $element
        .children('.title')
        .text()
        .trim();
      const author = $element
        .children('.author')
        .text()
        .trim();
      const classfy = $element
        .children('.book-list-classification')
        .text()
        .trim();
      const reviews = $element
        .children('.reviews')
        .text()
        .trim();
      this.ctx.service.topic.createTopic({ name, author, classfy, reviews });
    });
  }
  // async getPosts(params) {
  //   const result = await this.ctx.curl(`${this.root}/topics`, {
  //     method: 'post',
  //     data: params,
  //     dataType: 'json',
  //     contentType: 'json',
  //   });
  //   this.checkSuccess(result);
  //   return result;
  // }
  checkSuccess(result) {
    if (result.status !== 200) {
      const errorMsg =
        result.data && result.data.error_msg
          ? result.data.error_msg
          : 'unknown error';
      this.ctx.throw(result.status, errorMsg);
    }
    if (!result.data.success) {
      // 远程调用返回格式错误
      this.ctx.throw(500, 'remote response error', { data: result.data });
    }
  }
}

module.exports = SpiderService;
