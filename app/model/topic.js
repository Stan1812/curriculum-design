'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Topic = app.model.define('topic', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(10),
    author: STRING(10),
    description: TEXT,
    content: TEXT,
    created_at: DATE,
    updated_at: DATE,
  });

  return Topic;
};
