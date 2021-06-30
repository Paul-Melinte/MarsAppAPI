import express from "express";
import axios from "axios";

const app = express();
const port = 8000;
const apiKey = 'api_key=6xr9QIaOXNnYO0KLwLTfgUZSdH2gpuni7VOTAZYt';
const apiUrlNASA = 'https://api.nasa.gov/mars-photos/api/v1';

app.use(express.json());
const router = express.Router();

router.get('/test', (req, res) => res.send('Hello world !'));

router.get('/rovers', (req, res) => {
    const roversGetRes = axios.get(apiUrlNASA + '/rovers?' + apiKey,{})
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

app.use('/', router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
