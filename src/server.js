import express from "express";
import { productosRouter } from "./routers/productosRouter.js";
import { carritosRouter } from "./routers/carritosRouter.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", productosRouter);
app.use("/api/carrito", carritosRouter);
app.use("/productos", (req, res) => {
    res.render("productos");
});
app.use("/carrito", (req, res) => {
    res.render("carrito");
});
app.get("*", (req, res) => {
    res.render("home");
});

export default app;
