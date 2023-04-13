const exp = require("express");
const bdy = require("body-parser");

let str = [""];

// App Init
const app = exp();
// Static Folders
app.use(exp.static("views"));
app.use(exp.static("public"));
app.use(bdy.urlencoded({ extended: false }));

// Home Get Route
app.get("/", (req, res) => {
	res.render("index.html");
});

app.get("/act", (req, res) => {
	res.send(str);
});

app.get("/event", (req, res) => {
	console.log(req.body);
	res.sendFile(__dirname + "/views/evt.html");
});

app.post("/action", (req, res) => {
	str = `<!-- EVT cards -->
	<div class="event-card">
		<p class="sl-no">00</p>
		<div class="event-details">
			<p class="date">13.04.2023</p>
			<h3>${req.body.head}</h3>
			<p>
				${req.body.body}
			</p>
		</div>
		<div class="status">
			<i class="bx bx-task bx-md"></i>
			<i class="bx bx-task-x bx-md"></i>
		</div>
	</div>`;
	res.redirect("/act");
	console.log(req.body);
});

// App listen
app.listen(8080, function () {
	console.log("Server is up on port 8080.");
});
