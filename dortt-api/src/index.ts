import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
import * as cors from "cors";
import validator from "./subscriber/validator";
import 'dotenv/config';

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    //Cors para permitir o acesso extrangeiro, (coloque dominios dentro do cors como parametro para que sejam liberados)
    app.use(cors());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, validator, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(process.env.HTTP_PORT || 3001);

    console.log("Running on port 3001");

}).catch(error => console.log("TypeORM connection error: ", error));
