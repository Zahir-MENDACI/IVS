import Room from "../../models/Room";
import { RoomsDAO } from "../daos/rooms.daos";


export class RoomsService {
    private static instance: RoomsService;
    dao: RoomsDAO;

    constructor() {
        this.dao = RoomsDAO.getInstance();
    }

    static getInstance(): RoomsService {
        if (!RoomsService.instance) {
            RoomsService.instance = new RoomsService();
        }
        return RoomsService.instance;
    }


    async addRoom(body: any, params: any) {
        try {
            const buildingId: number = params.buildingId
            const room: Room = new Room(undefined, body.name, body.zipcode, buildingId)
            return await this.dao.add(buildingId, room) 
        } catch (error) {
            throw error
        }
    }

    async getRooms(params: any) {
        try {
            const buildingId: number = params.buildingId
            return await this.dao.getRooms(buildingId)
        } catch (error) {
            throw error
        }
    }

    async getRoomById(params: any) {
        try {
            const roomId: number = params.id
            const buildingId: number = params.buildingId
            return await this.dao.getRoomById(buildingId, roomId)
        } catch (error) {
            throw error
        }
    }

    async updateRoom(body: any, params: any) {
        try {
            const roomId: number = params.id
            const buildingId: number= params.buildingId
            const room: Room = new Room(roomId, body.name, body.zipcode, buildingId)
            return await this.dao.updateRoom(buildingId, roomId, room)
        } catch (error) {
            throw error
        }
    }

    async deleteRoom(params: any) {
        try {
            const roomId: number = params.id
            const buildingId: number = params.buildingId
            return await this.dao.deleteRoom(buildingId, roomId)
        } catch (error) {
            throw error
        }
    }
}