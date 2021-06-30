import express from "express";
import axios from "axios";
import { apiKey, apiUrlNASA } from "../apiConsts";
import { trimPhotoData } from "../photos/photoData";

export const roversRouter = express.Router();

// Endpoint for rover data
roversRouter.get("/", (req, res) => {
    const roversGetRes = axios.get(apiUrlNASA + "/rovers?" + apiKey,{})
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
});

// Endpoint hardcoded for specific sol, rover, and camera
roversRouter.get("/photos", (req, res) => {
    const photosGetRes = axios.get(apiUrlNASA + "/rovers/curiosity/photos?sol=100&camera=FHAZ&" + apiKey)
        .then(response => res.send(trimPhotoData(response.data.photos)))
        .catch(err => console.log(err));
});


// Endpoint hardcoded for sol
roversRouter.get("/:roverName/photos/:cameraName", (req, res) => {
    let sol: string;
    if(req.query.sol != undefined){
        sol = req.query.sol.toString();
    } else {
        sol = "100";
    }

    let page: string;
    if(req.query.page != undefined){
        page = req.query.page.toString();
    } else {
        page = "1";
    }

    const photosGetRes = axios.get(apiUrlNASA + `/rovers/${req.params.roverName}/photos?sol=${sol}&page=${page}&camera=${req.params.cameraName}&` + apiKey)
        .then(response => res.send(trimPhotoData(response.data.photos)))
        .catch(err => console.log(err));
});