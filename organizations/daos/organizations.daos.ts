import { MySqlService } from "../../config/MySqlService";
import Organization from "../../models/Organization";
import mysql from "mysql2"

export class OrganizationsDAO {
    private static instance: OrganizationsDAO;
    db: mysql.Connection;

    constructor() {
        this.db = MySqlService.getInstance().db;
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

            return returnValue
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getOrganizations() {
        let returnValue: Organization[] = []
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getOrganizationById(organizationId: string) {
        let returnValue: Organization
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async updateOrganization(organizationId: string, organization: Organization) {
        let returnValue: Organization
        try {

            return returnValue
        } catch (error) {
            throw error
        }
    }

    async deleteOrganization(organizationId: string) {
        let returnValue: Organization
        try {
 
            return returnValue
        } catch (error) {
            throw error
        }
    }
}