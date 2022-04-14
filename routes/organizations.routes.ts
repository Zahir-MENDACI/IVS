import express from "express"
import { OrganizationsController } from "../organizations/controllers/organizations.controllers";


const router = express.Router();

const organizationsController = new OrganizationsController();

router.post('/organizations', organizationsController.addOrganization);
router.get('/organizations', organizationsController.getAllOrganizations);
router.get('/organizations/:id', organizationsController.getOrganizationById);
router.put('/organizations/:id', organizationsController.updateOrganization);
router.delete('/organizations/:id', organizationsController.deleteOrganization);

export default {
    routes: router
}