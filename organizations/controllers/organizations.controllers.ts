import express from "express";
import { OrganizationsService } from "../services/organizations.services";


export class OrganizationsController {
    constructor() {
    }

    addOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            const organization = await organizationsService.addOrganization(req.body)
            res.status(200).send(organization);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllOrganizations = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            const organizations = await organizationsService.getOrganizations()
            res.status(200).send(organizations);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getOrganizationById = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            const organization = await organizationsService.getOrganizationById(req.params, req.query)
            res.status(200).send(organization);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    
    updateOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            const organization = await organizationsService.updateOrganization(req.body, req.params)
            res.status(200).send(organization);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            const organization = await organizationsService.deleteOrganization(req.params)
            res.status(200).send(organization);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}