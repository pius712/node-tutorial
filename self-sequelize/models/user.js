module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'user',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
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
