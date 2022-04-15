import { BuildingsDAO } from "../../buildings/daos/buildings.daos";
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
            const organizationId: number = params.organizationId
            const buildingId: number = params.buildingId
            const building = await BuildingsDAO.getInstance().getBuildingById(organizationId, buildingId)
            if (!building){
                return "Inexistant Building or Organization"
            }
            const room: Room = new Room(undefined, body.name, body.nb_persons, buildingId)
            return await this.dao.add(room) 
        } catch (error) {
            throw error
        }
    }

    async getRooms(params: any) {
        try {
            const organizationId: number = params.organizationId
            const buildingId: number = params.buildingId
            const building = await BuildingsDAO.getInstance().getBuildingById(organizationId, buildingId)
            if (!building){
                return "Inexistant Building or Organization"
            }
            return await this.dao.getRooms(organizationId, buildingId)
        } catch (error) {
            throw error
        }
    }

    async getRoomById(params: any, query: any) {
        try {
            const organizationId: number = params.organizationId
            const buildingId: number = params.buildingId
            const roomId: number = params.id
            const nb_persons: boolean = query.nb_persons !== undefined ? true : false
            let returnValue
            if (nb_persons) {
                returnValue = await this.dao.getNbPersonRoom(organizationId, buildingId, roomId)
            } else {
                returnValue = await this.dao.getRoomById(organizationId, buildingId, roomId)
            }
            if (!returnValue){
                throw "Inexistant Room"
            }
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateRoom(body: any, params: any) {
        try {
            const roomId: number = params.id
            const buildingId: number= params.buildingId
            const organizationId: number = params.organizationId
            const building = await BuildingsDAO.getInstance().getBuildingById(organizationId, buildingId)
            if (!building){
                return "Inexistant Building or Organization"
            }
            const room: Room = new Room(roomId, body.name, body.nb_persons, buildingId)
            return await this.dao.updateRoom(roomId, room)
        } catch (error) {
            throw error
        }
    }

    async deleteRoom(params: any) {
        try {
            const roomId: number = params.id
            const buildingId: number = params.buildingId
            const organizationId: number = params.organizationId
            const building = await BuildingsDAO.getInstance().getBuildingById(organizationId, buildingId)
            if (!building){
                return "Inexistant Building or Organization"
            }
            return await this.dao.deleteRoom(roomId)
        } catch (error) {
            throw error
        }
    }
}