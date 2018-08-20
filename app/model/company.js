'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Topic = app.model.define('topic', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(10),
    type: STRING(10),
    description: TEXT,

    created_at: DATE,
    updated_at: DATE,
  });

  return Topic;
};
