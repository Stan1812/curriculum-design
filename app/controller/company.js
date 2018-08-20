'use strict';
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class CompanyController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Company.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Company.findById(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, type, description } = ctx.request.body;
    const Company = await ctx.model.Company.create({ name, type, description });
    ctx.status = 201;
    ctx.body = Company;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Company = await ctx.model.Company.findById(id);
    if (!Company) {
      ctx.status = 404;
      return;
    }

    const { name, type, description } = ctx.request.body;
    await Company.update({ name, type, description });
    ctx.body = Company;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Company = await ctx.model.Company.findById(id);
    if (!Company) {
      ctx.status = 404;
      return;
    }

    await Company.destroy();
    ctx.status = 200;
  }
}

module.exports = CompanyController;
