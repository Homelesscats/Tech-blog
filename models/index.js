// models/index.js

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Define associations
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Export models
module.exports = {
  User,
  Comment,
  Post,
};
