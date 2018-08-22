'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  const Job = app.model.define('job', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(10),
    type: STRING(10),
    description: TEXT,
    subject: STRING,
    company_id: INTEGER,
    want_num: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Job;
};
