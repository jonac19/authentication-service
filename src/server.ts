import express from "express";
import routes from "./routes/index";

const server = express();
server.use(express.json())
server.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

export default server;
