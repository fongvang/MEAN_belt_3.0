const Restaurants = require("./Restaurant");

// readAll
function readAll(req,res)
{
	Restaurants.find({})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// createRest
function createOne(req,res)
{
	Restaurants.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// viewOne
function viewOne(req,res)
{
	Restaurants.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// editOne
function editOne(req,res)
{
	Restaurants.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// addReview
function addReview(req,res)
{
	Restaurants.findById(req.params.id)
		.then(data=>{
			data.reviews.push(req.body);
			return data.save()
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// deleteOne
function deleteOne(req,res)
{
	Restaurants.findByIdAndRemove(req.params.id)
		.then(data=>res.json({status: "deleted", data: data}))
		.catch(errs=>res.json({status: "blah", data: errs}));
}

module.exports = 
{
	readAll: readAll,
	createOne: createOne,
	deleteOne: deleteOne,
	addReview: addReview,
	viewOne: viewOne,
	editOne: editOne
}