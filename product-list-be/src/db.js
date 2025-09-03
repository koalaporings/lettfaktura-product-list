import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: "lettfaktura_product_list",
    username: "postgres",
    password: "123",
    host: "localhost",
    dialect: "postgres",
    port: 5432
});

export default sequelize;
