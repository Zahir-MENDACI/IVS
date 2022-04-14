import express from "express";
import { MySqlService } from "../../config/MySqlService";
import { RoomsService } from "../services/rooms.services";



export class RoomsController {
    constructor() {
    }

 

    addRoom = async (req: express.Request, res: express.Response) => {
        const organizationsService = RoomsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllRooms = async (req: express.Request, res: express.Response) => {
        const organizationsService = RoomsService.getInstance();
        try {
            
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getRoomById = async (req: express.Request, res: express.Response) => {
        const organizationsService = RoomsService.getInstance();
        try {

            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    updateRoom = async (req: express.Request, res: express.Response) => {
        const organizationsService = RoomsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteRoom = async (req: express.Request, res: express.Response) => {
        const organizationsService = RoomsService.getInstance();
        try {
            res.status(200).send();
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}