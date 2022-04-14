import express from "express";
import { MySqlService } from "../../config/MySqlService";
import { BuildingsService } from "../services/buildings.services";



export class BuildingsController {
    constructor() {
    }

 

    addBuilding = async (req: express.Request, res: express.Response) => {
        const organizationsService = BuildingsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllBuildings = async (req: express.Request, res: express.Response) => {
        const organizationsService = BuildingsService.getInstance();
        try {
            
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getBuildingById = async (req: express.Request, res: express.Response) => {
        const organizationsService = BuildingsService.getInstance();
        try {

            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    updateBuilding = async (req: express.Request, res: express.Response) => {
        const organizationsService = BuildingsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteBuilding = async (req: express.Request, res: express.Response) => {
        const organizationsService = BuildingsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}