import express from "express"
import buildingsRoutes from "./buildings.routes";
import organizationsRoutes from "./organizations.routes";
import roomsRoutes from "./rooms.routes";


const routes = (app: express.Application) => {

    app.use('/', organizationsRoutes.routes);
    app.use('/', buildingsRoutes.routes);
    app.use('/', roomsRoutes.routes);
    
}

export default routes