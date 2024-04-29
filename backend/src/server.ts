require("dotenv").config();

import express from "express";
import routes from "./routes/index";
import cors from "cors";

const server = express();
server.use(cors())
server.use(express.json())
server.use(routes);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

export default server;
