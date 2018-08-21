'use strict';

const { assert, app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  describe('POST /regist', () => {
    it('register', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .post('/regist')
        .send({
          username: 'test',
          password: 'test',
        });
      assert(res.status === 200);
    });
  });
  describe('POST /login', () => {
    it('login', async () => {
      app.mockCsrf();
      const res = await app
        .httpRequest()
        .post('/login')
        .send({
          username: 'test',
          password: 'test',
        });
      assert(res.status === 200);
    });
  });
});
