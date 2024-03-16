const transaction = require("../model/transaction");
const tierList = require("../model/tierList");
 
const postTransaction = (req, res) =>
{
    const Transaction = new transaction(req.body);
    Transaction.save().then(() => res.status(200).send('save success')
    ).catch(() => res.status(404).send('something wrong!'))
    
}

const getTransactions = (req, res) =>
{
    transaction.find({}).then((Transaction) => {
        res.status(200).send(Transaction);
    }).catch(() => res.status(400).send('something wrong!'))
}

const getTransactionsByKey = (req, res) =>
{
    transaction.find(req.params.key).then((transaction) => {
        res.status(200).send(transaction);
    }).catch(() => res.status(400).send('something wrong!'))
}

const helloWorld = (req, res) =>
{
    res.send('hello world')
}

const getTierList = (req, res) =>
{
    tierList.find({}).then((tierlist) =>{
        res.status(200).send(tierlist);
    }).catch(() => res.status(400).send('something wrong! cant get tierlist'))
}

const postTierList = (req, res) => 
{
    console.log(req.body)
    const tierlist = new tierList(req.body);
    tierlist.save().then(() => res.status(200).send('save success')
    ).catch(() => res.status(404).send('something wrong!'))
}

module.exports = {
    helloWorld,
    postTransaction,
    getTransactions,
    getTransactionsByKey,
    getTierList,
    postTierList
}