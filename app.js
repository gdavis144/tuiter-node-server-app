import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

/**
 * const connection = "mongodb+srv://gdavis:<MeEwWUjTWM9NLZar>@cluster0.ye54qik.mongodb.net/?retryWrites=true&w=majority"
 *     || 'mongodb://127.0.0.1:27017/tuiter';
 * @type {string}
 */
const connection = 'mongodb+srv://gdavis:MeEwWUjTWM9NLZar@cluster0.ye54qik.mongodb.net/?retryWrites=true&w=majority'
    || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(connection);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);