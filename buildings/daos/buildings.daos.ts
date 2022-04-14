import { MySqlService } from "../../config/MySqlService";
import Building from "../../models/Building";
import mysql from "mysql2"
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
        let returnValue: Building
        try {
            const snapshot =  await this.utils.mySqlQuery("INSERT INTO Buildings SET ?", building)
            console.log(snapshot)
            return returnValue
            
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
            const snapshot = await this.utils.mySqlQuery("SELECT * FROM Buildings WHERE id_organization = ? AND id=?", [organizationId, buildingId])
            returnValue = snapshot as Building
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(organizationId: number, buildingId: number, building: Building) {
        let returnValue: Building
        try {
            const snapshot = await this.utils.mySqlQuery("UPDATE Buildings SET ? WHERE id = ?", [building, buildingId])
            returnValue = snapshot as Building
            return returnValue
        } catch (error) {
            throw error
        }
    }
    
    async deleteBuilding(organizationId: number, buildingId: number) {
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