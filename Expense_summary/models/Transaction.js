const { Schema, model } = require('mongoose')
//timestamp
const timeStamp = new Date().getTime()
const TransactionSchema = new Schema({
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Number,
        default: timeStamp,
    },
})

const Transaction = model('transaction', TransactionSchema)

module.exports = Transaction