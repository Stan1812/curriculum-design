'use strict';
//  逻辑较简单,不需调用外部API,未使用service中间层
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class JobController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    const res = await ctx.model.Job.findAll(query);
    if (res) {
      ctx.helper.success({ ctx, jobs: res, msg: 'query success' });
    } else {
      ctx.helper.failed({ ctx, msg: 'something wrong' });
    }
  }

  async show() {
    const ctx = this.ctx;
    const res = await ctx.model.Job.findById(toInt(ctx.params.id));
    if (res) {
      ctx.helper.success({ ctx, job: res, msg: 'find success' });
    } else {
      ctx.helper.failed({ ctx, msg: 'find nothing,confirm job id' });
    }
  }

  async create() {
    const ctx = this.ctx;

    const {
      title,
      type,
      description,
      subject,
      company_id,
      want_num,
    } = ctx.request.body;
    const Job = await ctx.model.Job.create({
      title,
      type,
      description,
      subject,
      company_id,
      want_num,
    });
    if (Job) {
      ctx.helper.success({ ctx, msg: 'create success' });
    } else {
      ctx.helper.failed({ ctx, msg: 'create failed' });
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Job = await ctx.model.Job.findById(id);
    if (!Job) {
      ctx.status = 404;
      return;
    }

    const {
      title,
      type,
      description,
      subject,
      company_id,
      want_num,
    } = ctx.request.body;
    const res = await Job.update({
      title,
      type,
      description,
      subject,
      company_id,
      want_num,
    });
    if (res) {
      ctx.helper.success({ ctx, msg: 'update success' });
    } else {
      ctx.helper.failed({ ctx, msg: 'update failed' });
    }
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Job = await ctx.model.Job.findById(id);
    if (!Job) {
      ctx.status = 404;
      return;
    }

    await Job.destroy();
    ctx.status = 200;
  }
}

module.exports = JobController;
