'use strict';
const Service = require('egg').Service;

class TopicService extends Service {
  async getTopics(query) {
    // 获取topics
    const res = await this.ctx.model.User.findAll(query);
    return res;
  }
  async createTopic(params) {
    // 创建topic
    const { title, author, description, content } = params;
    const res = await this.ctx.model.Topic.create({
      title,
      author,
      description,
      content,
    });
    return res;
  }
  async showTopic(data) {
    // 获取特定id topic topic/:id
    const res = this.ctx.model.Topic.findById(data);
    return res;
  }
  async destroyTopic(id) {
    const topic = await this.ctx.model.Topic.findById(id);
    if (topic) {
      await topic.destroy();
    }
    return { status: topic ? 200 : 404 };
  }
}

module.exports = TopicService;
