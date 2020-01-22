module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'comment',
    {
      comment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
    },
  );
};
