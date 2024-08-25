const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetListSchema = new Schema({
    orderNo: {
        type: String,
        
    },
    partyName: {
        type: String,
        
    },
    type: {
        type: String,
        
    },
    style: {
        type: String,
        
    },
    totalQty: {
        type: String,
        
    },
    avgUnitPrice: {
        type: String,
        
    },
    totalValue: {
        type: String,
        
    },
    status: {
        type: String,
        
    },
    image:{
        type:String
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetListSchema);