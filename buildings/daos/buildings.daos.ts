import { MySqlService } from "../../config/MySqlService";
import Building from "../../models/Building";
import mysql from "mysql2"

export class BuildingsDAO {
    private static instance: BuildingsDAO;
    db: mysql.Connection;

    constructor() {
        this.db = MySqlService.getInstance().db;
        console.log("Created new instance of BuildingsDAO");
    }

    static getInstance(): BuildingsDAO {
        if (!BuildingsDAO.instance) {
            BuildingsDAO.instance = new BuildingsDAO();
        }
        return BuildingsDAO.instance;
    }



    async add(organization: Building) {
        let returnValue: Building
        try {

            return returnValue
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getBuildings() {
        let returnValue: Building[] = []
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getBuildingById(organizationId: string) {
        let returnValue: Building
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(organizationId: string, organization: Building) {
        let returnValue: Building
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async deleteBuilding(organizationId: string) {
        let returnValue: Building
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }
}