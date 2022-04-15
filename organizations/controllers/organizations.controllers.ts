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

    /* 
            // MySqlService.getInstance().db.query("CREATE TABLE organizations(id INT AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))", err => {
            // MySqlService.getInstance().db.query("CREATE TABLE buildings(id INT AUTO_INCREMENT, name VARCHAR(255), zipcode INT, id_organization INT, PRIMARY KEY (id),CONSTRAINT FK_Building_Organization FOREIGN KEY (id_organization)REFERENCES organizations(id))", err => {
            MySqlService.getInstance().db.query("CREATE TABLE rooms(id INT AUTO_INCREMENT, name VARCHAR(255), nb_persons INT, id_building INT, PRIMARY KEY (id),CONSTRAINT FK_Room_Building FOREIGN KEY (id_building)REFERENCES buildings(id))", err => {
                if (err) {
                    throw err
                }
                res.status(200).send("success");
            })

    */

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