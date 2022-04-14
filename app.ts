import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser';

const app: express.Application = express();
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 8080;


app.use((req: express.Request, res: express.Response) => {
    res.status(404).send({ url: req.originalUrl + ' not found !!' })
})

app.listen(port, () => {
    console.log(`Server Started at PORT ${port}`);
});