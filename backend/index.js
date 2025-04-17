import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/database.js";
import noteRoutes from "./Route/NoteRoute.js"; // Tidak menggunakan folder `src/`

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", noteRoutes);

const PORT = 3000;

// Sync database
db.sync()
  .then(() => {
    console.log("Database connected & synchronized");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database sync error:", error));
