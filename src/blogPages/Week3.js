import React from 'react'
import horton from '../img/pig-picture.jpg'

export default function BlogTemplate() {
	return (
		<div className="container">
			<div className="card bg-dark border border-info">
				<div className="card-body">
					<h2 className="card-title">Week Three</h2>
					<h6 className="card-subtitle mb-2 text-muted">9/6 - 9/10/2021</h6>
					<p className="card-text text-start">
						So ends yet another exciting week of work at Awesome Inc's Bootcamp. I feel like I'm getting a better grasp on Javascript overall,
						though I  have <em>so much more</em> to learn. I spent a ton of time this week debugging code to my  
						<a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging"> "rubber duck"</a> (actually an Awesome Inc. branded stress-ball pig, pictured below) - I'm quite confident my wife thinks I've lost my mind.<br />
					</p>
					<figure>
						<img src={horton} alt='pig' className="col-4 img-thumbnail "></img>
						<figcaption class="figure-caption text-white">Handsome little guy, isn't he? I call him "Horton."</figcaption>
					</figure>
					<p className="card-text text-start">
						The first project we worked on this week was a story generator. The generator takes a paragraph of text and replaces various parts of the string with other strings to make a story that changes when you press a button. To change these strings, the generator pulls information from a series of arrays.

						I got through the project without much trouble - just a bit of Googling and talking to the pig. I pondered for a while over a string that needed to be replaced twice, before remembering a <a href="https://www.codewars.com/">Codewars</a> kata I worked on in early August that required replacing all instances of a string using only one line of code.
						I used replaceAll() to change both instances of the string without re-running the same code twice.

						I may update the CSS on this project at a future date - it's pretty hideous as of now.
					</p>
					<hr />
					<p className="card-text text-start">
						I spent two straight days working on this week’s second project, an alarm clock.

						I was able to get the time to appear without <em>too</em> much trouble:

						I created a function to show the time. To start, I created variables to pull in the date, and to pull the hours, minutes, and seconds as variables from the date.
					<pre>{`function updateTime() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
}
`}</pre>
					</p>
					<p className="card-text text-start">
						From there, I converted from military to standard time by subtracting 12 from the hours if they were higher than 12 (So, for example, if the hour appeared as 14, it would subtract 12 to get 2 o'clock.) Also, if the hour is 0, I converted it to 12 - midnight.
					</p>
					<pre>{`if (hour > 12) {
	hour = (hour - 12);
} else if (hour == 0) {
	hour = '12';
}`}</pre>
When I tested this, I noticed the hours and minutes appeared as single numbers when they were not 10 or higher. (Ex: 953 to show 9:05:03) This simply wouldn't do. I had to add a zero in front of minutes or seconds less than 10. I added a zero in front of the hour as well, for uniformity and to keep the other digits on the clock from moving awkwardly to the right when the hour changed from single to double-digits.
<pre>{`if (hour < 10) {
	hour = '0' + hour;
}
if (minute < 10) {
	minute = '0' + minute;
}
if (second < 10) {
	second = '0' + second;
}
`}</pre>
With that sorted, I needed to format this information to appear as it would on a clock, adding colons between hour/minute/second - so I made a variable, <pre>{`currentTime`}</pre> (and also added in <pre>{`<span>`}</pre> to help the CSS for an animation on the colons):
<pre>{`var currentTime = $ {hour}<span class="blink">:</span>$ {minute}<span class="blink">:</span>$ {second};
`}</pre>
Finally, I needed to display the time in the HTML:
<pre>{`document.getElementById('time').innerHTML=currentTime;}
`}</pre>
And with that, we had a way to display the time. <br />

<em>"Easy."</em>  <a href="https://www.urbandictionary.com/define.php?term=%2FS" target="_blank">/s</a> <br/>

But the time didn't update without refreshing the page.

For that, I needed to use setInterval():
<pre>{`
    setInterval(updateTime, 1000)
`}</pre>
And with that, I had a clock that updated every 1000 milliseconds.

My next challenge was getting the alarms to work.

My first attempt at alarms ran directly from HTML, like so:

<h4>HTML:</h4>
<pre>{`<button onclick="setTimeout(alarm, 600000)">TEN MINUTE ALARM</button>
`}</pre>
<h4>JS:</h4>
<pre>{`function alarm() {
	document.getElementById('alertSound').play();
  alert('!');
}
`}</pre>
This used the button click to call the alarm function to set off a sound file and an alert. This technically worked, but I read this week that calling the function from HTML is not considered "best practice." The alarm sound and the visible alert also ran a few seconds apart, which wasn't great.<br />

I had to do something else. <br />

I removed the function call from HTML and moved the calls to Javascript: <br />

HTML:
<pre>{`<button id="eightHour">EIGHT HOUR ALARM</button>
<button id="tenMinute">TEN MINUTE ALARM</button>
<button id="tenSecond">TEN SECOND ALARM</button>
`}</pre>
JS:
<pre>{`// variables to run different alarms
var eightHour = document.getElementById('eightHour');
var tenMinute = document.getElementById('tenMinute');
var tenSecond = document.getElementById('tenSecond');

// function calls for alarms

tenSecond.onclick = setTimeout(alarm, 10000);
`}</pre>
					<p className="card-text text-start">
						The alarms ran instantly every time I clicked the alarm buttons, even though I'd included `setTimeout()` to make them wait a set amount of time before running. I struggled with this for a long while.
With input from Awesome Inc instructor Justin Hall, I switched to variable functions, like so:</p>
					<pre>{`eightHour.onclick = function () {setTimeout(alarm, 28800000);}
tenMinute.onclick = function () {setTimeout(alarm, 600000);}
tenSecond.onclick = function () {setTimeout(alarm, 10000);}
`}</pre>
And thus the alarms worked with the proper countdowns.

I was able to get buttons for specific time increments working - 8 hour, ten-minute, and ten-second test alarms, but I've thus far been unable to get an alarm to set for a specific time of day.<br />
Roughly a third of my time on this project was spent on CSS - I found an excellent font for the clock numbers, and for the sound, I used the classic alarm from <a href="https://www.youtube.com/watch?v=aXieXlAbpQg">every 80's clock radio</a>.<br />
Once I have a better grasp of Javascript, I intend to come back to this project and set up an alarm that can be set for a specific time of day - for example, by typing in a specific time of day. I’d also like to incorporate a dark/light theme button, as well as responsive CSS.
<hr />

					<h4>On Pseudo-code:</h4>
					<p>
						I have a bit of a block when it comes to pseudo-coding - I understand that it’s helpful, even necessary, but when I try to write pseudo-code I feel like I immediately forget how everything works. I have trouble translating what I’m trying to do with the code into English before I’ve written the code itself.
						From what I understand, Week Four of Bootcamp will have info on pseudo-code that should help me get past this block.
					</p>
				</div>
			</div>
		</div>
	)
}