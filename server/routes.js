const bp = require("body-parser");

const api = require("./controller");

function router(app)
{
	app.use(bp.json());
	//readall
	app.get("/api/restaurants", api.readAll);
	//create
	app.post("/api/restaurants/new", api.createOne);
	//viewone
	app.get("/api/restaurants/:id", api.viewOne);
	//deleteone
	app.delete("/api/restaurants/:id", api.deleteOne);
	//updateone
	app.patch("/api/restaurants/edit/:id", api.editOne);
	//addreview
	app.put("/api/restaurants/:id/review", api.addReview);
}

module.exports = router;