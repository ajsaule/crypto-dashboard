import express from 'express'
import axios from 'axios'

const app = express()
const PORT = 5000

app.listen(PORT, () =>
    console.log(`Server is running on: http://localhost:${PORT}`)
)

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, authorization, authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/BTC', async (req, res) => {
    try {
        const resTwo = await axios.get('https://trade.cointree.com/api/prices/aud/BTC')
        res.send(resTwo.data)
    } catch (err) {
        console.log(err)
        res.status(401).send(err.data)
    }
})

app.get('/ETH', async (req, res) => {
    try {
        const resTwo = await axios.get('https://trade.cointree.com/api/prices/aud/ETH')
        res.send(resTwo.data)
    } catch (err) {
        console.log(err)
        res.status(401).send(err.data)
    }
})

app.get('/XRP', async (req, res) => {
    try {
        const resTwo = await axios.get('https://trade.cointree.com/api/prices/aud/XRP')
        res.send(resTwo)
    } catch (err) {
        console.log(err)
        res.status(401).send(err.data)
    }
})

module.exports = app 