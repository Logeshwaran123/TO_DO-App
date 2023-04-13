var myAppToDo = {
	serial: "01",
	eventDate: "04th April",
	eventTitle: "EVENT Title",
};
// DOM
var options = document.querySelectorAll(".opt");
options[0].innerHTML =
	'<a href="localhost:8080/event"><i class="bx bxs-add-to-queue bx-sm"></i>Add Event</a>';
