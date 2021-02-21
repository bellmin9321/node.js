const { Sequelize } = require('sequelize');

module.exports = class User extends Sequelize.Model {
  // sequelize는 id를 자동으로 생성하므로 생략
  static init(sequelize) {
    return super.init({
    name: {
      type: Sequelize.toString(20),
      allowNull: false,
      unique: true,
    },
    age: {
      type: Sequelize.TINYINT.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: Sequelize.BOOLEAN, // ture, false
      allowNull: false,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: true,
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
}