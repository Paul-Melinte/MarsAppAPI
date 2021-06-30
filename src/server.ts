import express from "express";
import { roversRouter } from "./rovers/roversRouter";

const app = express();
const port = 8000;

app.use(express.json());

const router = express.Router();
router.use('/rovers', roversRouter);

app.use('/api', router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
