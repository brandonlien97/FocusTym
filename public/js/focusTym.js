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

var counter = 0;
var timeleft;
function initializePage() {
	console.log("Javascript connected!");
	timeleft = $("#time_0").html()
	$("#currectTopic").text($("#topic_0").html())
	setup();;
}

function group(){
	console.log("clicked");
	$("#warn").text("Group not found");
}



$("#timer").text(convertSeconds(timeleft - counter));
function convertSeconds(s) {
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

/*var audio = document.getElementById('FirePager.mp3');*/
var audio = new Audio("https://www.freespecialeffects.co.uk/soundfx/music/drum_01.wav");

function playAudio() {
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
		$('#pause').click(function(){play = false;});

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