import { Dialect, Options } from "sequelize"

export const databaseConfig: {
  database: string
  user: string
  password: string
  options: Options
} = {
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  options: {
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    define: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
      timestamps: true,
      freezeTableName: true
    },
    timezone: '-03:00',
    dialect: "mysql" as Dialect,
    dialectOptions: {
    },
  }
}