import Building from "../../models/Building";
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
            return await this.dao.getBuildings(organizationId)
        } catch (error) {
            throw error
        }
    }

    async getBuildingById(params: any) {
        try {
            const buildingId: number = params.id
            const organizationId: number = params.organizationId
            return await this.dao.getBuildingById(organizationId, buildingId)
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(body: any, params: any) {
        try {
            const buildingId: number = params.id
            const organizationId: number= params.organizationId
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
            return await this.dao.deleteBuilding(organizationId, buildingId)
        } catch (error) {
            throw error
        }
    }
}