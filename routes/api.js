var express = require('express');
var router = express.Router();
var contract  = require('../model/Contract/deploy')
var TokenMetaData = require('../model/tokenMetada/tokenmetadatModel')
var voucherModel = require('../model/Voucher/vouchermodel');
const createVoucher  = require('../model/Voucher/voucher_services');
const vouchersRoutes = require('../model/Voucher/voicher_Routes')


/* GET home page. */
router.get('/', async (req, res, next) => {
  res.status(200).send('W E L C O M E')
});

router.get('/deploy', async (req, res, next) => {
   await contract.deploycontract().then((a) => {
    res.status(200).json({result:a})
   }).catch((err) => {
    res.status(400).send(err)
   });
});

router.post('/tokenMetaData', async (req, res, next) => {

  const {addresss, urll} = req.body 
  TokenMeta = new TokenMetaData({
    tokenAddress: addresss,
    Url:urll
  })
    await TokenMetaData.create(TokenMeta).then(()=>{
    res.status(200).send('token metadata created')
  })
})

router.get('/voucher', async (req, res, next) => {
  createVoucher
});


module.exports = router
