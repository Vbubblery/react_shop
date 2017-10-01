import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';

const AutoIncrement = sequence(mongoose);

var productSchema = new mongoose.Schema({
    name : {type: String, required : true},
    updated : { type: Date, default: Date.now },
    description: {type: String, default : "Nothing to describe."},
    valid: { type: Boolean, default: false},
    imgs: [String],
    tags : [String]    
});

productSchema.plugin(AutoIncrement, {id:'product_counter',inc_field: 'id'});
module.exports = mongoose.model('Product',productSchema);

