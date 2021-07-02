import express from "express";
import axios from "axios";
import { apiKey, apiUrlNASA } from "../apiConsts";
import { trimPhotoData } from "../photos/trimmedPhotoData";
import { cameraTypes } from "../photos/cameraTypes";


export const roversRouter = express.Router();

// Endpoint for rover data
roversRouter.get("/", (req, res) => {
    const roversGetRes = axios.get(apiUrlNASA + "/rovers?" + apiKey,{})
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
});

// Endpoint hardcoded for specific sol, rover, and camera
roversRouter.get("/photos", (req, res) => {
    const photosGetRes = axios.get(apiUrlNASA + `/rovers/curiosity/photos?sol=100&camera=${cameraTypes.FHAZ}&` + apiKey)
        .then(response => res.send(trimPhotoData(response.data.photos)))
        .catch(err => console.log(err));
});


// Endpoint hardcoded for sol
roversRouter.get("/:roverName/photos/:cameraName", (req, res) => {
    const photosGetRes = axios.get(apiUrlNASA + `/rovers/${req.params.roverName}/photos?sol=100&camera=${req.params.cameraName}&` + apiKey)
        .then(response => res.send(trimPhotoData(response.data.photos)))
        .catch(err => console.log(err));
});