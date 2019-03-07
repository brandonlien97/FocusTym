'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
})
//https://www.freespecialeffects.co.uk/soundfx/glass/glass_breaking.mp3
//https://www.freespecialeffects.co.uk/soundfx/music/drum_01.wav"
if(localStorage.getItem("audio") == undefined){
	console.log("what");
	localStorage.setItem("audio","https://www.freespecialeffects.co.uk/soundfx/music/drum_01.wav");
}
audio = new Audio(localStorage.getItem("audio"));
function changeAlarm(x) {
	console.log(x.value);
	localStorage.setItem("audio",x.value);
}


$("#joinGroupbtn").click(group);
function goBack(){
	window.history.back();
}
/*
 * Function that is called when the document is ready.
 */
 var audio;
var counter = 0;
var timeleft;
function initializePage() {
	console.log("Javascript connected!");
	timeleft = $("#time_0").html()
	console.log(localStorage.getItem("audio"));
	audio = new Audio(localStorage.getItem("audio"));

	
	$("#edit #editTask").click(function(){
		
		ga('send', 'event', 'edit', 'click');
	});

	$("#currectTopic").text($("#topic_0").html())
	setup();
	$("#nextTopic").click(function(){
		$("#0 #delete").click();
	});
	$("#nextTopicS").click(function(){
		$("#0 #delete").click();
		overalyOff();
		pauseAudio();
	});

	$("#setTimer").click(function(){
		localStorage.setItem("timer", $('#tim').val());
	});
	$("#snoz").click(function(){
		//$("#elementId :selected").text(); // The text content of the selected option
		var s = localStorage.getItem("timer")*60;
		
		console.log(s, "snoz");
		if (s==undefined){
			s = 120;
		}
		$("#time_0").html(s);
		timeleft = $("#time_0").html();
		setup();
		overalyOff();
		pauseAudio();
	});


// // Instantiate a slider
// 	var mySlider = $("#vol").bootstrapSlider();
 
// // Call a method on the slider
// 	var value = $("#vol").bootstrapSlider('getValue');
// 	console.log(value);
// With JQuery

$('#vol').slider({
	formatter: function(value) {
		localStorage.setItem("volume", value/10);
		//document.getElementById("volume").value = localStorage.getItem("volume");
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
	var timer = timeleft
	$("#timer").text(convertSeconds(timer - counter));

	var interval = setInterval(timeIt, 1000);
	var play = false;
	function timeIt(){
		$('#play').click(function(){
			play = true;
			playAudio();
			pauseAudio();
		});
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
				overlayOn()
			}
		}

	}
}

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overalyOff() {
  document.getElementById("overlay").style.display = "none";
}
