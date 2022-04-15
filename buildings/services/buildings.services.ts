import Building from "../../models/Building";
import Organization from "../../models/Organization";
import { OrganizationsDAO } from "../../organizations/daos/organizations.daos";
import { BuildingsDAO } from "../daos/buildings.daos";


export class BuildingsService {
    private static instance: BuildingsService;
    dao: BuildingsDAO;

    constructor() {
        this.dao = BuildingsDAO.getInstance();
    }

    static getInstance(): BuildingsService {
        if (!BuildingsService.instance) {
            BuildingsService.instance = new BuildingsService();
        }
        return BuildingsService.instance;
    }


    async addBuilding(body: any, params: any) {
        try {
            const organizationId: number = params.organizationId
            const building: Building = new Building(undefined, body.name, body.zipcode, organizationId)
            return await this.dao.add(organizationId, building)
        } catch (error) {
            throw error
        }
    }

    async getBuildings(params: any) {
        try {
            const organizationId: number = params.organizationId
            const organization: Organization = await OrganizationsDAO.getInstance().getOrganizationById(organizationId)
            if (!organization) {
                throw "Inexistant organization"
            } else {
                return await this.dao.getBuildings(organizationId)
            }
        } catch (error) {
            throw error
        }
    }

    async getBuildingById(params: any, query: any) {
        try {
            const buildingId: number = params.id
            const organizationId: number = params.organizationId
            const nb_persons: boolean = query.nb_persons !== undefined ? true : false
            const organization: Organization = await OrganizationsDAO.getInstance().getOrganizationById(organizationId)
            if (!organization) {
                throw "Inexistant organization"
            } else {
                let building
                if (nb_persons) {
                    building = await this.dao.getNbPersonBuilding(organizationId, buildingId)
                } else {
                    building = await this.dao.getBuildingById(organizationId, buildingId)
                }
                if (!!building) {
                    return building
                } else {
                    return "Inexistant building"
                }
            }
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(body: any, params: any) {
        try {
            const buildingId: number = params.id
            const organizationId: number = params.organizationId
            const building: Building = new Building(buildingId, body.name, body.zipcode, organizationId)
            return await this.dao.updateBuilding(organizationId, buildingId, building)
        } catch (error) {
            throw error
        }
    }

    async deleteBuilding(params: any) {
        try {
            const buildingId: number = params.id
            const organizationId: number = params.organizationId
            return await this.dao.deleteBuilding(buildingId)
        } catch (error) {
            throw error
        }
    }
}