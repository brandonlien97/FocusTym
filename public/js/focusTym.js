'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
})
$("#joinGroupbtn").click(group);
function goBack(){
	window.history.back();
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

}

function group(){
	console.log("clicked");
	$("#warn").text("Group not found");
}
