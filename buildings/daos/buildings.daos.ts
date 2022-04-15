import { MySqlService } from "../../config/MySqlService";
import Building from "../../models/Building";
import mysql, { ResultSetHeader } from "mysql2"
import { Utils } from "../../utils/utils";

export class BuildingsDAO {
    private static instance: BuildingsDAO;
    db: mysql.Connection;
    utils: Utils

    constructor() {
        this.db = MySqlService.getInstance().db;
        this.utils = Utils.getInstance();
        console.log("Created new instance of BuildingsDAO");
    }

    static getInstance(): BuildingsDAO {
        if (!BuildingsDAO.instance) {
            BuildingsDAO.instance = new BuildingsDAO();
        }
        return BuildingsDAO.instance;
    }



    async add(organizationId: number, building: Building) {
        try {
            const writeResult: ResultSetHeader =  await this.utils.mySqlQuery("INSERT INTO Buildings SET ?", building) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                throw "error while adding building"
            }
            return "Building added"            
        } catch (error: any) {
            console.log(error)
            if (error.code === "ER_NO_SUCH_TABLE"){
                await this.utils.createBuildingsTable()
                this.add(organizationId, building)
            }
            throw error
        }
    }

    async getBuildings(organizationId: number) {
        let returnValue: Building[] = []
        try {
            const snapshot =  await this.utils.mySqlQuery("SELECT * FROM Buildings WHERE id_organization = ?", organizationId)
            returnValue = snapshot as Building[]
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getBuildingById(organizationId: number, buildingId: number) {
        let returnValue: Building
        try {
            const snapshot: any = await this.utils.mySqlQuery("SELECT * FROM Buildings WHERE id_organization = ? AND id=?", [organizationId, buildingId])
            returnValue = snapshot[0] as Building
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getNbPersonBuilding(organizationId: number, buildingId: number) {
        let returnValue: number
        try {
            const snapshot: any =  await this.utils.mySqlQuery(`
                SELECT SUM(nb_persons) FROM Organizations o, Buildings as b, Rooms as r 
                WHERE r.id_building = b.id
                AND b.id_organization = o.id
                AND o.id = ?
                AND b.id = ?`
            , [organizationId, buildingId])
            //Express can't return a number value, so we convert to string
            returnValue = snapshot[0][Object.keys(snapshot[0])[0]]?.toString()
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(organizationId: number, buildingId: number, building: Building) {
        try {
            const writeResult: ResultSetHeader = await this.utils.mySqlQuery("UPDATE Buildings SET ? WHERE id = ?", [building, buildingId]) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                return "Error while updating organization"
            }
            return `Organization ${organizationId} updated`
        } catch (error) {
            throw error
        }
    }
    
    async deleteBuilding(buildingId: number) {
        let returnValue: Building
        try {
            const snapshot = await this.utils.mySqlQuery("DELETE from Buildings WHERE id = ?", buildingId)
            returnValue = snapshot as Building
            return returnValue
        } catch (error) {
            throw error
        }
    }
}