import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const HotelSchema = new Schema({
    id: Number,
    name: String,
    available: Number,
    city: String,
    cover: String
});
module.exports = mongoose.model('Hotel', HotelSchema);