import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

interface BlogAttributes {
    id: number;
    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
}
  
interface BlogCreationAttributes extends Optional<BlogAttributes, 'id'> {}
  
class Blog extends Model<BlogAttributes, BlogCreationAttributes> implements BlogAttributes {
    public id!: number;
    public title!: string;
    public content!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Blog.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      content: {
        type: new DataTypes.STRING(1024),
        allowNull: false,
      }
    },
    {
      tableName: 'blogs',
      sequelize, // passing the `sequelize` instance is required
    }
);

export default Blog;