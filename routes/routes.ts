import express from "express"
import organizationsRoutes from "./organizations.routes";


const routes = (app: express.Application) => {

    app.use('/', organizationsRoutes.routes);
    
}

export default routes