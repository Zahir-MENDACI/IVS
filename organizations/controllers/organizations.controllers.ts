import express from "express";
import { MySqlService } from "../../config/MySqlService";
import { OrganizationsService } from "../services/organizations.services";



export class OrganizationsController {
    constructor() {
    }

 

    addOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllOrganizations = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getOrganizationById = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {

            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    updateOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteOrganization = async (req: express.Request, res: express.Response) => {
        const organizationsService = OrganizationsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}