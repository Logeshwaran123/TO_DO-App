// USER CONSTANTS
type myToDo = {
	[key: string]: string | "Default";
};
const myAppToDo: myToDo = {
	serial: "01",
	eventDate: "04th April",
	eventTitle: "EVENT Title",
};

// DOM
const options = document.querySelectorAll(".opt");

options[0].innerHTML =
	'<a href="evt.html"><i class="bx bxs-add-to-queue bx-sm"></i>Add Event</a>';
