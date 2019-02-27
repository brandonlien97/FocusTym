'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
})
//"https://www.freespecialeffects.co.uk/soundfx/music/drum_01.wav"
var audio = new Audio("https://www.freespecialeffects.co.uk/soundfx/glass/glass_breaking.mp3");

$("#joinGroupbtn").click(group);
function goBack(){
	window.history.back();
}
/*
 * Function that is called when the document is ready.
 */
var counter = 0;
var timeleft;
function initializePage() {
	console.log("Javascript connected!");
	timeleft = $("#time_0").html()

	$("#currectTopic").text($("#topic_0").html())
	setup();
	$("#nextTopic").click(function(){
		$("#0 #delete").click();
	});


// // Instantiate a slider
// 	var mySlider = $("#vol").bootstrapSlider();
 
// // Call a method on the slider
// 	var value = $("#vol").bootstrapSlider('getValue');
// 	console.log(value);
// With JQuery
$('#vol').slider({
	formatter: function(value) {
		localStorage.setItem("volume",value/10);
	}
});
}

function group(){
	console.log("clicked");
	$("#warn").text("Group not found");
}


$("#timer").text(convertSeconds(timeleft - counter));
function convertSeconds(s) {
	console.log(s);
	if(isNaN(s)){
		return "No topics left. you are done!";
	}
	var min = Math.floor(s / 60);
	var sec = s % 60;
	if (min < 10) {
		if (sec < 10) {
			return '0' + min + ':' + '0' + sec;
		}
		else {
			return '0' + min + ':' + sec;
		}
	}
	else {
		if (sec < 10) {
			return min + ':' + '0' + sec;
		}
		else {
			return min + ':' + sec;
		}
	}
}

/* EXTRA SOUND URLS 
https://www.freespecialeffects.co.uk/soundfx/music/drum_09.wav
https://www.freespecialeffects.co.uk/soundfx/music/fanfare7.wav
https://www.freespecialeffects.co.uk/soundfx/aircraft_cockpit/cockpit_warning_2.wav
https://www.freespecialeffects.co.uk/soundfx/animals/bird.wav
https://www.freespecialeffects.co.uk/soundfx/animals/frog1.wav
*/

//var audio = new Audio("https://www.freespecialeffects.co.uk/soundfx/music/drum_01.wav");
audio.loop = true;
function playAudio() {
	console.log(audio.volume, localStorage.getItem("volume"));
	if(localStorage.getItem("volume") < 1){
		audio.volume = localStorage.getItem("volume");
	}
	console.log(audio.volume);
	audio.play();
}
function pauseAudio() {
	audio.pause();
}


function setup() {
	console.log("Timer ready");
	var timer = timeleft
	$("#timer").text(convertSeconds(timer - counter));

	var interval = setInterval(timeIt, 1000);
	var play = false;
	function timeIt(){
		$('#play').click(function(){play = true;});
		$('#pause').click(function(){
			play = false;
			pauseAudio();});

		if(play){
			counter++;
			$("#timer").text(convertSeconds(timeleft - counter));
			if (counter == timeleft) {
				clearInterval(interval);
				counter = 0;
				playAudio();
			}
		}

	}
}