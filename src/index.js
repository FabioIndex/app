import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("bem vindo ao curso tsc watch");
});
app.listen(3000, () => {
    console.log("Servidor ativo !!!!!");
});
//# sourceMappingURL=index.js.map