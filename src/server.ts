import express from "express";
import cors from "cors";
import { roversRouter } from "./rovers/roversRouter";
import { APODRouter } from "./photos/APODRouter";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const router = express.Router();
router.use("/rovers", roversRouter);
router.use("/apod", APODRouter);

app.use("/api", router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
