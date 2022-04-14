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


    async addBuilding(body: any) {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async getBuildings() {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async getBuildingById(params: any) {
        try {
            return 
        } catch (error) {
            throw error
        }
    }

    async updateBuilding(body: any, params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }

    async deleteBuilding(params: any) {
        try {
            return
        } catch (error) {
            throw error
        }
    }
}