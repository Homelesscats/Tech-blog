const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Add validation to disallow empty titles
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false, // Add validation to disallow empty bodies
    },
  },
  {
    sequelize,
    // You can add indexes here if needed, e.g.,:
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ["title"],
    //   },
    // ],
  }
);

// You can add comments or documentation here to describe the purpose of the Post model.

module.exports = Post;
