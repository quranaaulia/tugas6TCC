import { Sequelize } from "sequelize";

const db = new Sequelize("notesnana", "admin", "nana", {
    host: "34.135.131.201",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Bisa disesuaikan tergantung konfigurasi sertifikat SSL
        }
    }
});

export default db;
