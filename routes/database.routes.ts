import express from "express"
import { Utils } from "../utils/utils";


const router = express.Router();


router.get('/createTables', async (req, res) => {
    try {
        await Utils.getInstance().createTables()
        res.status(200).send("success")
    } catch (e) {
        res.status(400).send(e)
    }
});

export default {
    routes: router
}