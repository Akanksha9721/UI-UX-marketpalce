const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    file: { type: String },
    image: { type: String },
    price: { type: String, unique: false },
    uploadBy: { type: String },
    createdAt: { type: Date, default: Date.now },
    description:{type:String}
});

module.exports = model('designs', mySchema);