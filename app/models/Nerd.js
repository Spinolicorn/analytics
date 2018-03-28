// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

//create a schema
// var analyticsSchema = new Schema({
	// fa_01: String
// });

//custom method to add string to end of name
// testSchema.dudify = function(){
	// this.name = this.name + '-dude';
	// return this.name;
// }

//create a model using the schema
// var test = mongoose.model('test', testSchema);

// module.exports = mongoose.model('Analytics', analyticsSchema);
// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {type : String, default: ''}
});
