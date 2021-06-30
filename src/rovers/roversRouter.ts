import express from "express";
import axios from "axios";
import { cameraTypes } from "./cameraTypes";
import { apiKey, apiUrlNASA } from "../apiConsts";
import { TrimmedPhotoData } from "./photoData";

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
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
});


// Endpoint hardcoded for sol
roversRouter.get("/:roverNam/photos/:cameraName", (req, res) => {
    const photosGetRes = axios.get(apiUrlNASA + `/rovers/${req.params.roverNam}/photos?sol=100&camera=${req.params.cameraName}&` + apiKey)
        .then(response => {
            const photos: any[] = response.data.photos;
            const trimmedPhotos: TrimmedPhotoData[] = [];

            while(photos.length > 0) {
                const photoData = photos.pop();
                const trimmedPhotoData: TrimmedPhotoData = {
                    id:photoData.id,
                    img_url:photoData.img_src,
                    sol:photoData.sol,
                    earth_date:photoData.earth_date
                };

                trimmedPhotos.push(trimmedPhotoData);
            }

            res.send(trimmedPhotos);
        })
        .catch(err => console.log(err));
});