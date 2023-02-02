import { Routes } from "../../Domains/routes";
import express, { Express, Router } from "express";
import http from 'http';
import Middlewares from "./Middlewares";

class Server {
    private app: Express = express();
    private server: http.Server;

    start() {
        this.setupMiddlewares(),
        this.setupRoutes(),
        this.initServer()
    }

    private initServer() {
        this.app.listen(3003, () => {
            console.log(`Server is running... [PORT 3003]`)
        })
    }

    private setupMiddlewares() {
        Middlewares.map(middleware => this.app.use(middleware)) ;
    }

    private setupRoutes() {
        Routes.map((route: Router) => this.app.use(route));
    }
}

export default Server;