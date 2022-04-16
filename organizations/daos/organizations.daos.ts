import { MySqlService } from "../../config/MySqlService";
import Organization from "../../models/Organization";
import mysql, { ResultSetHeader } from "mysql2"
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
        try {
            const writeResult: ResultSetHeader =  await this.utils.mySqlQuery("INSERT INTO Organizations SET ?", organization) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                throw "error while adding the organization"
            }
            return "Organization added"
            
        } catch (error: any) {
            console.log(error)
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

    async getOrganizationById(organizationId: number) {
        let returnValue: Organization
        try {
            const snapshot: any = await this.utils.mySqlQuery("SELECT * FROM Organizations WHERE id=?", organizationId)
            returnValue = snapshot[0] as Organization
            return returnValue
        } catch (error) {
            throw error
        }
    }

    async getNbPersonOrganization(organizationId: number) {
        let returnValue: number = 0
        try {
            const buildings: any = await this.utils.mySqlQuery("SELECT id FROM Buildings WHERE id_organization = ?", organizationId)
            for(const building of buildings) {
                const snapshot: any = await this.utils.mySqlQuery("SELECT SUM(nb_persons) FROM Rooms WHERE id_building = ?", building.id)
                let count: string = snapshot[0][Object.keys(snapshot[0])[0]] ?? "0"
                returnValue = returnValue + parseInt(count)
            }
            //Express can't return a number value, so we convert to string
            return returnValue.toString()
        } catch (error) {
            throw error
        }
    }

    async updateOrganization(organizationId: string, organization: Organization) {
        try {
            const writeResult: any = await this.utils.mySqlQuery("UPDATE Organizations SET ? WHERE id = ?", [organization, organizationId])
            if (writeResult.affectedRows === 0) {
                return "Error while updating organization"
            }
            return `Organization ${organizationId} updated`
        } catch (error) {
            throw error
        }
    }
    
    async deleteOrganization(organizationId: string) {
        let returnValue
        try {
            const writeResult: ResultSetHeader = await this.utils.mySqlQuery("DELETE from Organizations WHERE id = ?", organizationId) as ResultSetHeader
            if (writeResult.affectedRows === 0) {
                return "Error while deleting organization"
            }
            return `Organization ${organizationId} deleted`
        } catch (error) {
            throw error
        }
    }
}