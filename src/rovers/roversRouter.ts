import express from "express";
import axios from "axios";
import { cameraTypes } from "./cameraTypes";

const apiKey = 'api_key=6xr9QIaOXNnYO0KLwLTfgUZSdH2gpuni7VOTAZYt';
const apiUrlNASA = 'https://api.nasa.gov/mars-photos/api/v1';

export const roversRouter = express.Router();

// Endpoint for rover data
roversRouter.get('/', (req, res) => {
    const roversGetRes = axios.get(apiUrlNASA + '/rovers?' + apiKey,{})
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
});

// Endpoint hardcoded for specific sol, rover, and camera
roversRouter.get('/photos', (req, res) => {
    const photosGetRes = axios.get(apiUrlNASA + '/rovers/curiosity/photos?sol=100&camera=FHAZ&' + apiKey)
        .then(response => res.send(response.data))
        .catch(err => console.log(err));
})