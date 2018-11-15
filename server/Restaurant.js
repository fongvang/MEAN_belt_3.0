const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rest_belt", { useNewUrlParser: true }, (errs)=>console.log(errs||'database is go'));

const RestaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: [3, 'name must be at least 3 characters']
	},
	cuisine: {
		type: String,
		minlength: [3, 'cuisine must be at least 3 characters']
	},
	reviews: [{
		name: {
			type: String,
			minlength: [3, 'name must be at least 3 characters']
		},
		rating: {
			type: Number,
			default: 1,
			minimum: 1
		},
		review: {
			type: String,
			minlength: [3, 'review must be at least 3 characters']
		}
	}]
}, {timestamps: true})

const Restaurants= mongoose.model('restaurant', RestaurantSchema);

module.exports = Restaurants