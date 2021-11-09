const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors({
    origin: ["http://localhost", "http://localhost:8080"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send({
        data: "Esta consumiendo el servicio",
        timestamp: Date.now()
    });
});
const PORT = process.env.PORT || 4557;
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});