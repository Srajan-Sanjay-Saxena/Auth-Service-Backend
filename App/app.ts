import express from "express";
import { type Application } from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { env } from "../newProcess";
import morgan from "morgan";
import { corsOptions } from "../Helpers/constant.helper";


//* Starting scaffolding the application interaction
const app : Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(cors(corsOptions))

if(env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

export{ app }

