import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import { AdminRoute, VandorRoute } from './routes';
import { MONGO_URI } from './config';

const port = 8822;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

mongoose.connect(MONGO_URI, {
}).then(result => {
    console.log('MongoDB Connected')
}).catch(err => console.log('error' + err));


app.use('/', (req, res) => {
    return res.json('Hello from Food Order App!!!')
});

app.listen(port, () => {
    console.clear();
    console.log('app is listening to the port: ' + port);
})