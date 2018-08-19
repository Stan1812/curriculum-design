'use strict';
const database = 'course';
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1534612253423_8985';
  config.sequelize = {
    // egg-sequelize 配置
    dialect: 'mysql', // db type
    database: database, //eslint-disable-line
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'XXXXXXXXX',
  };
  // add your config here
  config.middleware = [ 'errorHandler' ];
  config.errorHandler = {
    match: '/',
  };
  return config;
};
