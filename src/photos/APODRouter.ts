import express from "express";
import axios from "axios";
import { apiKey, apiUrlAPOD } from "../apiConsts";

export const APODRouter = express.Router();

APODRouter.get("/", (req,res) => {
    const APODGetRes = axios.get(apiUrlAPOD + "?" + apiKey)
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
});