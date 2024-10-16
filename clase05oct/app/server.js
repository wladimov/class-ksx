import express from "express";
import { connectDB } from "./db/db.js";
import productRoutes from "./routes/product.router.js";

const app = express();

//Middleware para parsear JSON
app.use(express.json());

connectDB();

app.use("/products", productRoutes);

app.listen(8080, () => {
  console.log("Servidor iniciado en puerto 8080");
});
