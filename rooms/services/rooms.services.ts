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


    async addRoom(body: any) {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async getRooms() {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async getRoomById(params: any) {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async updateRoom(body: any, params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }

    async deleteRoom(params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }
}