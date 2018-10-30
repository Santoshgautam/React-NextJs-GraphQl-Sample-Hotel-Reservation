import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
    name: String,
    hotelName: String,
    arrivalDate: {
        type : Date,
        default: Date.now
    },
    departureDate: Date
});
module.exports = mongoose.model('Reservation', ReservationSchema);