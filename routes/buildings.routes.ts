import express from "express"
import { BuildingsController } from "../buildings/controllers/buildings.controllers";


const router = express.Router();

const buildingsController = new BuildingsController();

router.post('/organizations/:organizationId/buildings', buildingsController.addBuilding);
router.get('/organizations/:organizationId/buildings', buildingsController.getAllBuildings);
router.get('/organizations/:organizationId/buildings/:id', buildingsController.getBuildingById);
router.put('/organizations/:organizationId/buildings/:id', buildingsController.updateBuilding);
router.delete('/organizations/:organizationId/buildings/:id', buildingsController.deleteBuilding);

export default {
    routes: router
}