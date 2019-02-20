'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
})

function goBack(){
	window.history.back();
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("#joinGroup").click(group());
}

function group(){
	console.log("clicked");
	$("#name").text("Group not found");
}
