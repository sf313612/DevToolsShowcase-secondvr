import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Встановлюємо EJS як шаблонізатор
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Вказуємо папку з публічними файлами (CSS, JS, IMG)
app.use(express.static(path.join(__dirname, "public")));

// Маршрути для сторінок
app.get("/", (req, res) => res.render("index"));
app.get("/index", (req, res) => res.render("index"));
app.get("/tools", (req, res) => res.render("tools"));
app.get("/details", (req, res) => res.render("details"));

// Запуск сервера
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
