const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'cars' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    bookedTimeSlot: {
        from: { type: String },
        to: { type: String }
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    driverRequired: { type: Boolean },
    status: {
        type: String,
        default: 'Pending',
    },
    driverConfirmed: { type: Boolean, default: false },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
},
    { timestamps: true }
);

const bookingModel = mongoose.model('bookings', bookingSchema);
module.exports = bookingModel;
