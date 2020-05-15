const ONE_WEEK = 1000 * 60 * 60 * 24 * 7 * 4;

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
      type: DataTypes.BIGINT,
      defaultValue: Date.now() + ONE_WEEK,
    },
    shared: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Post.associate = models => {
    Post.belongsTo(models.User);
  };

  return Post;
};
