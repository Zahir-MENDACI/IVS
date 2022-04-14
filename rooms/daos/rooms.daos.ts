import { MySqlService } from "../../config/MySqlService";
import Room from "../../models/Room";
import mysql from "mysql2"
import { Utils } from "../../utils/utils";

export class RoomsDAO {
    private static instance: RoomsDAO;
    db: mysql.Connection;
    utils: Utils

    constructor() {
        this.db = MySqlService.getInstance().db;
        this.utils = Utils.getInstance();
        console.log("Created new instance of RoomsDAO");
    }

    static getInstance(): RoomsDAO {
        if (!RoomsDAO.instance) {
            RoomsDAO.instance = new RoomsDAO();
        }
        return RoomsDAO.instance;
    }



    async add(buildingId: number, room: Room) {
        let returnValue: Room
        try {
            const snapshot =  await this.utils.mySqlQuery("INSERT INTO Rooms SET ?", room)
            console.log(snapshot)
            return returnValue
            
        } catch (error: any) {
            console.log("----", error)
            if (error.code === "ER_NO_SUCH_TABLE"){
                await this.utils.createRoomsTable()
                this.add(buildingId, room)
            }
            throw error
        }
    }

    async getRooms(buildingId: number) {
        let returnValue: Room[] = []
        try {
            const snapshot =  await this.utils.mySqlQuery("SELECT * FROM Rooms WHERE id_building = ?", buildingId)
            returnValue = snapshot as Room[]
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getRoomById(buildingId: number, roomId: number) {
        let returnValue: Room
        try {
            const snapshot = await this.utils.mySqlQuery("SELECT * FROM Rooms WHERE id_building = ? AND id=?", [buildingId, roomId])
            returnValue = snapshot as Room
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateRoom(buildingId: number, roomId: number, room: Room) {
        let returnValue: Room
        try {
            const snapshot = await this.utils.mySqlQuery("UPDATE Rooms SET ? WHERE id = ?", [room, roomId])
            returnValue = snapshot as Room
            return returnValue
        } catch (error) {
            throw error
        }
    }
    
    async deleteRoom(buildingId: number, roomId: number) {
        let returnValue: Room
        try {
            const snapshot = await this.utils.mySqlQuery("DELETE from Rooms WHERE id = ?", roomId)
            returnValue = snapshot as Room
            return returnValue
        } catch (error) {
            throw error
        }
    }
}