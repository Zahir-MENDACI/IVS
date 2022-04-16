import { MySqlService } from "../../config/MySqlService";
import Room from "../../models/Room";
import mysql, { ResultSetHeader } from "mysql2"
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



    async add(room: Room) {
        try {
            const writeResult: ResultSetHeader = await this.utils.mySqlQuery(`INSERT INTO Rooms SET ?`
                , room) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                throw "error while adding room"
            }
        return "Room added"
        } catch (error: any) {
            console.log(error)
            throw error
        }
    }

    async getRooms(organizationId: number, buildingId: number) {
        let returnValue: Room[] = []
        try {
            const snapshot = await this.utils.mySqlQuery(`
                SELECT * FROM Organizations o, Buildings as b, Rooms as r 
                WHERE r.id_building = b.id
                AND b.id_organization = o.id
                AND o.id = ?
                AND b.id = ?`
                , [organizationId, buildingId])
            returnValue = snapshot as Room[]
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getRoomById(organizationId: number, buildingId: number, roomId: number) {
        let returnValue: Room
        try {
            const snapshot: any = await this.utils.mySqlQuery(`
            SELECT * FROM Organizations o, Buildings as b, Rooms as r 
            WHERE r.id_building = b.id
            AND b.id_organization = o.id
            AND o.id = ?
            AND b.id = ?
            AND r.id = ?`
                , [organizationId, buildingId, roomId])
            returnValue = snapshot[0] as Room
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getNbPersonRoom(organizationId: number, buildingId: number, roomId: number) {
        let returnValue: number
        try {
            const snapshot: any = await this.utils.mySqlQuery(`
                SELECT nb_persons FROM Organizations o, Buildings as b, Rooms as r 
                WHERE r.id_building = b.id
                AND b.id_organization = o.id
                AND o.id = ?
                AND b.id = ?
                AND r.id = ?`
                , [organizationId, buildingId, roomId])
            //Express can't return a number value, so we convert to string
            returnValue = snapshot[0][Object.keys(snapshot[0])[0]].toString()
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateRoom(roomId: number, room: Room) {
        try {
            const writeResult: ResultSetHeader = await this.utils.mySqlQuery("UPDATE Rooms SET ? WHERE id = ?", [room, roomId]) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                throw "error while updating room"
            }
            return "Room updated"
        } catch (error) {
            throw error
        }
    }

    async deleteRoom(roomId: number) {
        try {
            const writeResult: ResultSetHeader = await this.utils.mySqlQuery("DELETE from Rooms WHERE id = ?", roomId) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                throw "error while deleting room"
            }
            return "Room deleted"
        } catch (error) {
            throw error
        }
    }
}