'use strict';
// 计划调用外部API来获取话题文章等,还在寻找数据来源
const Controller = require('egg').Controller;
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
class TopicController extends Controller {
  async index() {
    // 获取topics
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    const res = await this.ctx.service.topic.getTopics(query);
    if (res) {
      ctx.body = { status: 1, topics: res };
    } else {
      ctx.body = { status: 0, message: 'find nothing' };
    }
  }
  async create() {
    // 创建topic
    const ctx = this.ctx;
    const res = ctx.service.topic.createTopic(ctx.request.body);
    if (res) {
      ctx.body = { status: 1, message: 'create success' };
    } else {
      ctx.body = { status: 0, message: 'create failed' };
    }
  }
  async show() {
    // 获取特定id topic topic/:id
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const res = await ctx.service.topic.showTopic(id);
    if (res) {
      if (res) {
        ctx.body = { status: 1, topic: res };
      } else {
        ctx.body = { status: 0, message: 'find nothing' };
      }
    }
  }
  async destroyed() {
    //  删除topic
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const res = ctx.service.topic.destroyTopic(id);
    if (res.status === 200) {
      ctx.body = { status: 1, message: 'delete success' };
    } else {
      ctx.body = { status: 0, message: 'find nothing,confirm  topic id' };
    }
  }
}
module.exports = TopicController;
