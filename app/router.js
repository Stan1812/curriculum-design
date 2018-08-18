'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.beforeStart(async function() {
    await app.model.sync({ force: false }); // false 为不覆盖 true会删除再创建
  });
  router.get('/', controller.home.index);
};