import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    in_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: falsew
    },

    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

export default Product;