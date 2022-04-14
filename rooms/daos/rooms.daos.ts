import { MySqlService } from "../../config/MySqlService";
import Room from "../../models/Room";
import mysql from "mysql2"

export class RoomsDAO {
    private static instance: RoomsDAO;
    db: mysql.Connection;

    constructor() {
        this.db = MySqlService.getInstance().db;
        console.log("Created new instance of RoomsDAO");
    }

    static getInstance(): RoomsDAO {
        if (!RoomsDAO.instance) {
            RoomsDAO.instance = new RoomsDAO();
        }
        return RoomsDAO.instance;
    }



    async add(organization: Room) {
        let returnValue: Room
        try {

            return returnValue
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getRooms() {
        let returnValue: Room[] = []
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getRoomById(organizationId: string) {
        let returnValue: Room
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateRoom(organizationId: string, organization: Room) {
        let returnValue: Room
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async deleteRoom(organizationId: string) {
        let returnValue: Room
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }
}