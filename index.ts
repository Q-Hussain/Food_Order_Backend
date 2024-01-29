import express from 'express';

const port = 8822;
const app = express();

app.use('/', (req, res) => {
    return res.json('Hello from Food Order App!!!')
});

app.listen(port, () => {
    console.log('app is listening to the port: ' + port);
})