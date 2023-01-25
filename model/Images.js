const mongoose = require('mongoose');
const HomeModal = require('./Home');
const ImagesSchema = mongoose.Schema({
    iamge:String
})
const ImagesModal = mongoose.Model("Images",ImagesSchema);
module.exports = HomeModal;