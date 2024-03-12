const express = require('express')
const {
    helloWorld,
    getTransactions,
    getTransactionsByKey,
    postTransaction,
    getTierList,
    postTierList
} = require('../controlers/home');
const {accessLevelMiddlewave} = require("../middlewave/accessLevel")
const router = express.Router()

//khai bao router 
router.get('/', helloWorld)
router.get('/transactions',accessLevelMiddlewave(2),  getTransactions)
router.get('/transaction/:key', getTransactionsByKey)
router.post('/transaction', postTransaction)

//

router.get('/tierlist', getTierList)
router.post('/tierlist', postTierList)

module.exports = router;