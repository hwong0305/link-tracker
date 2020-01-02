export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiration: {
      type: DataTypes.DATE,
      defaultValue: new Date(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)),
    },
  });

  Post.associate = models => {
    Post.belongsTo(models.User);
  };

  return Post;
};
