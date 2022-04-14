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
            return 
        } catch (error) {
            throw error
        }
    }

    async getOrganizations() {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async getOrganizationById(params: any) {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async updateOrganization(body: any, params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }

    async deleteOrganization(params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }
}