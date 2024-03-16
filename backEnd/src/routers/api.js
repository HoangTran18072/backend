const express = require('express')
const {
    helloWorld,
    getTransactions,
    getTransactionsByKey,
    postTransaction,
    getTierList,
    postTierList
} = require('../controlers/home');

const { getAllUser,
        postNewUser,
        getUserByID,
        deleteUserByID,
        updateUserByID
    } = require('../controlers/user')
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

//user
router.get('/users/:page', getAllUser);
router.post('/user', postNewUser);
router.get('/user/:id', getUserByID);
router.patch('/user', updateUserByID)
router.delete('/user/:id', deleteUserByID);

module.exports = router;