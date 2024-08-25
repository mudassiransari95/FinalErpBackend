const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingListSchema = new Schema({
    orderNo: {
        type: String,
        
    },
    bookingDate: {
        type: String,
        
    },
    partyName: {
        type: String,
        
    },
    type: {
        type: String,
        
    },
    composition: {
        type: String,
        
    },
    orderImage: {
        type: String,
        
    },
    processLoss: {
        type: String,
        
    },
    otherFabric: {
        type: String,
        
    },
    rib: {
        type: String,
        
    },
    collar: {
        type: String,
        
    },
    preparedBy: {
        type: String,
        
    },
    status: {
        type: String,
        
    }
  
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingListSchema);