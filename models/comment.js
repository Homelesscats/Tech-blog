const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false, // Add validation to disallow empty comments
    },
  },
  {
    sequelize,
    // You can add indexes here if needed
  }
);

// You can add comments or documentation here to describe the purpose of the Comment model.

module.exports = Comment;
