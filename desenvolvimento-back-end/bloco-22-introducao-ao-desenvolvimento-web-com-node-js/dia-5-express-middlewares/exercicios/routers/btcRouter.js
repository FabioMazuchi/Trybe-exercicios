const { default: axios } = require('axios');
const authToken = require('../middlewares/authToken');

const router = require('express').Router();

router.use('/price', authToken, async (req,res) => {
    const result = await (await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json)')).data;

    res.status(200).send(result);
});

module.exports = router;