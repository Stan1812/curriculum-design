'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/company.test.js', () => {
  describe('POST /company', () => {
    it('create company', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .post('/company')
        .send({
          name: 'NCUHOME',
          type: '科技',
          description: '牛逼',
        });
      assert(res.status === 201);
    });
  });
  describe('PUT /company/1', () => {
    it('update company', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .put('/company/1')
        .send({
          name: 'NCUHOME',
          type: '科技',
          description: '还是牛逼',
        });
      assert(res.status === 200);
    });
  });
  describe('GET /company/1', () => {
    it('get company', async () => {
      app.mockCsrf();
      return app
        .httpRequest()
        .get('/company/1')
        .expect(200);
    });
  });
  describe('DELETE /company/1', () => {
    it('delete company', async () => {
      app.mockCsrf();
      return app
        .httpRequest()
        .delete('/company/1')
        .expect(200);
    });
  });
});
