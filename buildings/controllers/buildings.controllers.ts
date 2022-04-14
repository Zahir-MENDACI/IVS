import express from "express";
import { BuildingsService } from "../services/buildings.services";


export class BuildingsController {
    constructor() {
    }

    addBuilding = async (req: express.Request, res: express.Response) => {
        const buildingsService = BuildingsService.getInstance();
        try {
            const building = buildingsService.addBuilding(req.body, req.params)
            res.status(200).send(building);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllBuildings = async (req: express.Request, res: express.Response) => {
        const buildingsService = BuildingsService.getInstance();
        try {
            const buildings = await buildingsService.getBuildings(req.params)
            res.status(200).send(buildings);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getBuildingById = async (req: express.Request, res: express.Response) => {
        const buildingsService = BuildingsService.getInstance();
        try {
            const building = await buildingsService.getBuildingById(req.params)
            res.status(200).send(building);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    
    updateBuilding = async (req: express.Request, res: express.Response) => {
        const buildingsService = BuildingsService.getInstance();
        try {
            const building = await buildingsService.updateBuilding(req.body, req.params)
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteBuilding = async (req: express.Request, res: express.Response) => {
        const buildingsService = BuildingsService.getInstance();
        try {
            const building = await buildingsService.deleteBuilding(req.params)
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}