import express from "express";
import axios from "axios";

const server = express();

server.get("/", (req, res) => {
    res.send("weather api");
});

export default server;