import express from "express"
import { RoomsController } from "../rooms/controllers/rooms.controllers";


const router = express.Router();

const roomsController = new RoomsController();

router.post('/organizations/:organizationId/buildings/:buildingId/rooms', roomsController.addRoom);
router.get('/organizations/:organizationId/buildings/:buildingId/rooms', roomsController.getAllRooms);
router.get('/organizations/:organizationId/buildings/:buildingId/rooms/:id', roomsController.getRoomById);
router.put('/organizations/:organizationId/buildings/:buildingId/rooms/:id', roomsController.updateRoom);
router.delete('/organizations/:organizationId/buildings/:buildingId/rooms/:id', roomsController.deleteRoom);

export default {
    routes: router
}