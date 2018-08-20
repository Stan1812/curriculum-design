'use strict';
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
    const res = await this.ctx.model.Topic.getTopics(query);
    if (res) {
      ctx.body = { status: 1, topics: res };
    } else {
      ctx.body = { status: 0, message: 'find nothing' };
    }
  }
  async create() {
    // 创建topic
    const ctx = this.ctx;
    const res = ctx.model.Topic.createTopic(ctx.request.body);
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
    const res = await ctx.model.Topic.showTopic(id);
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
    const res = ctx.model.destroyTopic(id);
    if (res.status === 200) {
      ctx.body = { status: 1, message: 'delete success' };
    } else {
      ctx.body = { status: 0, message: 'find nothing,confirm  topic id' };
    }
  }
}
module.exports = TopicController;
