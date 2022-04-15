import Organization from "../../models/Organization";
import { OrganizationsDAO } from "../daos/organizations.daos";


export class OrganizationsService {
    private static instance: OrganizationsService;
    dao: OrganizationsDAO;

    constructor() {
        this.dao = OrganizationsDAO.getInstance();
    }

    static getInstance(): OrganizationsService {
        if (!OrganizationsService.instance) {
            OrganizationsService.instance = new OrganizationsService();
        }
        return OrganizationsService.instance;
    }


    async addOrganization(body: any) {
        try {
            const organization: Organization = new Organization(undefined, body.name)
            return await this.dao.add(organization) 
        } catch (error) {
            throw error
        }
    }

    async getOrganizations() {
        try {
            return await this.dao.getOrganizations()
        } catch (error) {
            throw error
        }
    }

    async getOrganizationById(params: any, query: any) {
        try {
            const organizationId = params.id
            const nb_persons: boolean = query.nb_persons !== undefined ? true : false
            let organization
            if (nb_persons) {
                organization = await this.dao.getNbPersonOrganization(organizationId)
            } else {
                organization = await this.dao.getOrganizationById(organizationId)
            }
            console.log(organization)
            if (!organization){
                throw "Inexistant Organization"
            }
            return organization
        } catch (error) {
            throw error
        }
    }

    async updateOrganization(body: any, params: any) {
        try {
            const organizationId = params.id
            const organization: Organization = new Organization(organizationId, body.name)
            return await this.dao.updateOrganization(organizationId, organization)
        } catch (error) {
            throw error
        }
    }

    async deleteOrganization(params: any) {
        try {
            const organizationId = params.id
            return await this.dao.deleteOrganization(organizationId)
        } catch (error) {
            throw error
        }
    }
}