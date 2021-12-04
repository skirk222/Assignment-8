function switchModeLight() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

// function switchModeDark() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


var calEvent = "";

function Event(date, time, name) {
this.date = date;
this.time = time;
this.name = name;
}

function dateSelect() {
	var dateSelected = document.getElementById("date-dropdown").value;
  console.log(dateSelected);
	return dateSelected
}

function timeSelect() {
	var timeSelected = document.getElementById("time-dropdown").value;
	return timeSelected
}

function nameSelect() {
	var nameSelected = document.getElementById("name").value;
	return nameSelected
}

function addtoCal() {
	let dateSelected = dateSelect();
	let timeSelected = timeSelect();
	let nameSelected = nameSelect();
  console.log(dateSelected, timeSelected, nameSelected)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected}`;
  document.getElementById(dateSelected).innerHTML="Time: "+timeSelected+"<br> Name: "+nameSelected; 
  document.getElementById("date-dropdown").classList.add("event-style");
  document.getElementById("time-dropdown").classList.add("event-style");
  document.getElementById("name").classList.add("event-style");
  document.getElementById(dateSelected).classList.add("cal-event");
}

function removeFromCal() {
  let dateSelected = dateSelect();
	let timeSelected = timeSelect();
	let nameSelected = nameSelect();
  let id = `#${dateSelected}`;
  var dateToRemove = document.getElementById(dateSelected);
  dateToRemove.parentNode.removeChild(dateToRemove);
}

function dateSelect2() {
	var dateSelected2 = document.getElementById("date-dropdown2").value;
  console.log(dateSelected2);
	return dateSelected2
}

function timeSelect2() {
	var timeSelected2 = document.getElementById("time-dropdown2").value;
	return timeSelected2
}

function nameSelect2() {
	var nameSelected2 = document.getElementById("name2").value;
	return nameSelected2
}
function addtoCal2() {
  console.log("print")
	let dateSelected2 = dateSelect2();
	let timeSelected2 = timeSelect2();
	let nameSelected2 = nameSelect2();
  console.log(dateSelected2, timeSelected2, nameSelected2)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected2}`;
  document.getElementById(dateSelected2).innerHTML="Time: "+timeSelected2+"<br> Name: "+nameSelected2; 
  document.getElementById("date-dropdown2").classList.add("event-style");
  document.getElementById("time-dropdown2").classList.add("event-style");
  document.getElementById("name2").classList.add("event-style");
  document.getElementById(dateSelected2).classList.add("cal-event");
}

function dateSelect3() {
	var dateSelected3 = document.getElementById("date-dropdown3").value;
  console.log(dateSelected3);
	return dateSelected3
}

function timeSelect3() {
	var timeSelected3 = document.getElementById("time-dropdown3").value;
	return timeSelected3
}

function nameSelect3() {
	var nameSelected3 = document.getElementById("name3").value;
	return nameSelected3
}
function addtoCal3() {
  console.log("print")
	let dateSelected3 = dateSelect3();
	let timeSelected3 = timeSelect3();
	let nameSelected3 = nameSelect3();
  console.log(dateSelected3, timeSelected3, nameSelected3)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected3}`;
  document.getElementById(dateSelected3).innerHTML="Time: "+timeSelected3+"<br> Name: "+nameSelected3; 
  document.getElementById("date-dropdown3").classList.add("event-style");
  document.getElementById("time-dropdown3").classList.add("event-style");
  document.getElementById("name3").classList.add("event-style");
  document.getElementById(dateSelected3).classList.add("cal-event");
}

function dateSelect4() {
	var dateSelected4 = document.getElementById("date-dropdown4").value;
  console.log(dateSelected4);
	return dateSelected4
}

function timeSelect4() {
	var timeSelected4 = document.getElementById("time-dropdown4").value;
	return timeSelected4
}

function nameSelect4() {
	var nameSelected4 = document.getElementById("name4").value;
	return nameSelected4
}
function addtoCal4() {
  console.log("print")
	let dateSelected4 = dateSelect4();
	let timeSelected4 = timeSelect4();
	let nameSelected4 = nameSelect4();
  console.log(dateSelected4, timeSelected4, nameSelected4)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected4}`;
  document.getElementById(dateSelected4).innerHTML="Time: "+timeSelected4+"<br> Name: "+nameSelected4; 
  document.getElementById("date-dropdown4").classList.add("event-style");
  document.getElementById("time-dropdown4").classList.add("event-style");
  document.getElementById("name4").classList.add("event-style");
  document.getElementById(dateSelected4).classList.add("cal-event");
}

function dateSelect5() {
	var dateSelected5 = document.getElementById("date-dropdown5").value;
  console.log(dateSelected5);
	return dateSelected5
}

function timeSelect5() {
	var timeSelected5 = document.getElementById("time-dropdown5").value;
	return timeSelected5
}

function nameSelect5() {
	var nameSelected5 = document.getElementById("name5").value;
	return nameSelected5
}
function addtoCal5() {
  console.log("print")
	let dateSelected5 = dateSelect5();
	let timeSelected5 = timeSelect5();
	let nameSelected5 = nameSelect5();
  console.log(dateSelected5, timeSelected5, nameSelected5)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected5}`;
  document.getElementById(dateSelected5).innerHTML="Time: "+timeSelected5+"<br> Name: "+nameSelected5; 
  document.getElementById("date-dropdown5").classList.add("event-style");
  document.getElementById("time-dropdown5").classList.add("event-style");
  document.getElementById("name5").classList.add("event-style");
  document.getElementById(dateSelected5).classList.add("cal-event");
}

function dateSelect6() {
	var dateSelected6 = document.getElementById("date-dropdown6").value;
  console.log(dateSelected6);
	return dateSelected6
}

function timeSelect6() {
	var timeSelected6 = document.getElementById("time-dropdown6").value;
	return timeSelected6
}

function nameSelect6() {
	var nameSelected6 = document.getElementById("name6").value;
	return nameSelected6
}
function addtoCal6() {
  console.log("print")
	let dateSelected6 = dateSelect6();
	let timeSelected6 = timeSelect6();
	let nameSelected6 = nameSelect6();
  console.log(dateSelected6, timeSelected6, nameSelected6)
	// let eventSelected = new Event(dateSelected, timeSelected, nameSelected);
  let id = `#${dateSelected6}`;
  document.getElementById(dateSelected6).innerHTML="Time: "+timeSelected6+"<br> Name: "+nameSelected6; 
  document.getElementById("date-dropdown6").classList.add("event-style");
  document.getElementById("time-dropdown6").classList.add("event-style");
  document.getElementById("name6").classList.add("event-style");
  document.getElementById(dateSelected6).classList.add("cal-event");
}