const { Sequelize } = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        Sequelize.toString(20),
        allowNull: false,
        unique: true,
    },
    age: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: Sequelize.TETX,
    },
    created_at: {
      type: Sequelize.DATE, // DATETIME, MYSQL -> Sequelize DateOnly
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    // createdAt, UpdatedAt, deletedAt: true // soft delete
  }, {
    sequelize,
    timestamps: true,
    underscored: false,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
}