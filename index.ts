import express from 'express';
import bodyParser from 'body-parser';

import { AdminRoute, VandorRoute } from './routes';

const port = 8822;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);


app.use('/', (req, res) => {
    return res.json('Hello from Food Order App!!!')
});

app.listen(port, () => {
    console.clear();
    console.log('app is listening to the port: ' + port);
})