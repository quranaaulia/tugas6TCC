import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Note = db.define(
  "notes",
  {
    nama: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Note;

(async () => {
    await db.sync({ alter: true }); // Gunakan { alter: true } agar struktur tabel diperbarui tanpa kehilangan data
})();
