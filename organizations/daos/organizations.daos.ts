import { MySqlService } from "../../config/MySqlService";
import Organization from "../../models/Organization";
import mysql from "mysql2"
import { Utils } from "../../utils/utils";

export class OrganizationsDAO {
    private static instance: OrganizationsDAO;
    db: mysql.Connection;
    utils: Utils

    constructor() {
        this.db = MySqlService.getInstance().db;
        this.utils = Utils.getInstance();
        console.log("Created new instance of OrganizationsDAO");
    }

    static getInstance(): OrganizationsDAO {
        if (!OrganizationsDAO.instance) {
            OrganizationsDAO.instance = new OrganizationsDAO();
        }
        return OrganizationsDAO.instance;
    }



    async add(organization: Organization) {
        let returnValue: Organization
        try {
            const snapshot =  await this.utils.mySqlQuery("INSERT INTO Organizations SET ?", organization)
            console.log(snapshot)
            return returnValue
            
        } catch (error: any) {
            console.log(error)
            if (error.code === "ER_NO_SUCH_TABLE"){
                await this.utils.createOrganizationsTable()
                this.add(organization)
            }
            throw error
        }
    }

    async getOrganizations() {
        let returnValue: Organization[] = []
        try {
            const snapshot =  await this.utils.mySqlQuery("SELECT * FROM Organizations")
            returnValue = snapshot as Organization[]
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getOrganizationById(organizationId: string) {
        let returnValue: Organization
        try {
            const snapshot = await this.utils.mySqlQuery("SELECT * FROM Organizations WHERE id=?", organizationId)
            returnValue = snapshot as Organization
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateOrganization(organizationId: string, organization: Organization) {
        let returnValue: Organization
        try {
            const snapshot = await this.utils.mySqlQuery("UPDATE Organizations SET ? WHERE id = ?", [organization, organizationId])
            returnValue = snapshot as Organization
            return returnValue
        } catch (error) {
            throw error
        }
    }
    
    async deleteOrganization(organizationId: string) {
        let returnValue: Organization
        try {
            const snapshot = await this.utils.mySqlQuery("DELETE from Organizations WHERE id = ?", organizationId)
            returnValue = snapshot as Organization
            return returnValue
        } catch (error) {
            throw error
        }
    }
}