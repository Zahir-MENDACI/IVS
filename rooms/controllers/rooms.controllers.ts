import express from "express";
import { RoomsService } from "../services/rooms.services";


export class RoomsController {
    constructor() {
    }

    addRoom = async (req: express.Request, res: express.Response) => {
        const roomsService = RoomsService.getInstance();
        try {
            const room = await roomsService.addRoom(req.body, req.params)
            res.status(200).send(room);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getAllRooms = async (req: express.Request, res: express.Response) => {
        const roomsService = RoomsService.getInstance();
        try {
            const rooms = await roomsService.getRooms(req.params)
            res.status(200).send(rooms);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    getRoomById = async (req: express.Request, res: express.Response) => {
        const roomsService = RoomsService.getInstance();
        try {
            const room = await roomsService.getRoomById(req.params, req.query)
            res.status(200).send(room);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
    
    updateRoom = async (req: express.Request, res: express.Response) => {
        const roomsService = RoomsService.getInstance();
        try {
            const room = await roomsService.updateRoom(req.body, req.params)
            res.status(200).send(room);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }

    deleteRoom = async (req: express.Request, res: express.Response) => {
        const roomsService = RoomsService.getInstance();
        try {
            const room = await roomsService.deleteRoom(req.params)
            res.status(200).send(room);
        } catch (error) {
            console.log(error)
            res.status(400).send(error);
        }
    }
}