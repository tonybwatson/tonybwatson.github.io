# **Tony Watson's Awesome Inc. Web Dev Bootcamp Blog**

---

## Week Four: _On Pseudocode and Working From Home_
### 9/13/21 - 9/17/21

---

## Weekly Breakdown

This week was exhausting. We worked primarily on pseudocode (breaking down instructions for how a program should work into easily readable English.) 

I have trouble thinking in that way - my mind tends to jump back and forth between different pieces of the project I'm working on, writing whatever code comes to mind at any given moment. The first time I attempted the pseudocode project (writing out an everyday task in pseudocode), I  just wrote it out as code. I started again from the beginning and I feel that my second attempt is much better.

To improve my ability to pseudocode, I'll need to work on my ability to focus and break down ideas into smaller pieces in a specific order, focusing on what needs to be done at each stage, rather than just focusing on the overall project. I need to focus on simplification.

This week we also worked on a project that created a game in which the player controls an Evil Circle that causes bouncing balls to disappear. 

I had a ton of fun with this project. I hit several stretch goals - I made the objects wrap to the other side of the screen when they went off the side; caused the bouncing balls to change color and size when they collided with one another; and even implemented a "You win!" message when the player gets rid of all of the balls, after which the game resets. With several sections of this project (particularly the counter which shows how many balls remain on screen), I found that pseudocode greatly aided me in breaking down exactly what needed to be done to solve the problem in that given instance.

My biggest roadblock with this project was caused by a simple typing error. I spent around an hour trying to get the bouncing ball game working again after I'd broken it trying to code the EvilCircle. After what felt like hours (it was probably about a half-hour) of scanning through the code, I realized I'd placed an additional set of parentheses.

The original:

    EvilCircle.prototype = Object.create()(Shape.prototype);
    EvilCircle.prototype.constructor = EvilCircle;

The fixed version:

    EvilCircle.prototype = Object.create(Shape.prototype);
    EvilCircle.prototype.constructor = EvilCircle;

![This little maneuver's gonna cost us 51 years](https://pbs.twimg.com/media/EOtgwQxUcAAhWWH?format=jpg&name=small)

Pictured: Me, typing that additional set of parentheses.

After working on this project, I realized I may enjoy working in game design. I'll probably work on simple side projects of my own and go from there.

---

The most helpful part of the onboarding process through Awesome Inc was the ability to work from home at my own pace. I'm typically not a morning person; I get my best work done in the afternoon and early evening. Working at home, I've been able to do everything at my own pace and in my own time. Adjusting to this sort of workload over a month at more or less my own pace made the process less painful.

Adjusting to the 8 am - 5 pm schedule in the coming weeks will be a challenge. Luckily, I've prepared in practically every way I could - Meals are prepped, contingency plans are set up (what if my car breaks down? What if...) 

I'm as ready as I'll ever be.

The help channel on Slack was super helpful as well - being able to ask questions and to see other bootcampers' questions is incredibly useful. Several times during onboarding I had a problem or issue and opened up the help channel on Slack, only to see another bootcamper with a similar problem already solved.

--- 

My biggest hindrance during onboarding was imposter syndrome. I tend to feel my work isn't good enough - not just with regular code, but with other projects (including this blog.) I hate putting my work and words "out there."

---

## On overcoming challenges:

My primary methods for overcoming challenges during onboarding were 
1. "Google it" - If I encounter a problem, my first instinct is to search for information on how to fix that problem. The first few results for most of my code-related searches tend to pull up information from MDN Web Docs, W3 Schools, or StackOverflow. The former two are the preferred method of solving problems - MDN and W3 Schools give information on how processes actually work, and while StackOverflow answers usually give working code, they often don't give the best explanation for _why_ it works.
2. "Throw stuff at the wall and see what happens" - This only works for problems about which I already have a little bit of knowledge. If I know a bit about what _should_ fix the problem, I can usually work it out eventually.
3. "Ask for help" - I've always had a problem asking for help. I'd rather not admit I have a problem than show weakness - though when I've asked for help, I've been pointed in the right direction fairly quickly. I'm hoping to improve upon this during the next few months.

---

## Week Three: _“I made an alarm clock”_ or _“How I spent several hours trying to get an alarm to stop going off every time the page reloaded”_
### 9/6/21 - 9/10/21

---

So ends yet another exciting week of work for Awesome Inc's Bootcamp. I feel like I'm getting a better grasp on Javascript overall, though I  have *so much more* to learn. I spent a ton of time this week debugging code to my ["rubber duck"](https://en.wikipedia.org/wiki/Rubber_duck_debugging) (actually an Awesome Inc. branded stress-ball pig, pictured below) - I'm quite confident my wife thinks I've lost my mind.

![pig](img/pig-picture.jpg)

Handsome little guy, isn't he? I call him "Horton."

---

The first project we worked on this week was a story generator. The generator takes a paragraph of text and replaces various parts of the string (“:insertx:”, “:inserty:”, etc.) with other strings to make a story that changes when you press a button. To change these strings, the generator pulls strings from a series of arrays. 

I got through the project without much trouble - just a bit of Googling and talking to the pig. I pondered for a while over a string that needed to be replaced twice, before remembering a [Codewars](https://www.codewars.com/) kata I worked on in early August that required replacing all instances of a string using only one line of code.
I used `replaceAll()` to change both instances of the string without re-running the same code twice.

I may update the CSS on this project at a future date - it's pretty hideous as of now.

---

I spent two straight days working on this week’s second project, an alarm clock. 

I was able to get the time to appear without _too_ much trouble: 

I created a function to show the time. To start, I created variables to pull in the date, and to pull the hours, minutes, and seconds as variables from the date.

    function updateTime() {
      var date = new Date();
      
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

From there, I converted from military to standard time by subtracting 12 from the hours if they were higher than 12 (So, for example, if the hour appeared as 14, it would subtract 12 to get 2 o'clock.) Also, if the hour is 0, I converted it to 12 - midnight.

    if (hour > 12) {
        hour = (hour - 12);
    } else if (hour == 0) {
        hour = '12';
    }

When I tested this, I noticed the hours and minutes appeared as single numbers when they were not 10 or higher. (Ex: 953 to show 9:05:03) This simply wouldn't do. I had to add a zero in front of minutes or seconds less than 10. I added a zero in front of the hour as well, for uniformity and to keep the other digits on the clock from moving awkwardly to the right when the hour changed from single to double-digits.

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    
With that sorted, I needed to format this information to appear as it would on a clock, adding colons between hour/minute/second - so I made a variable, `currentTime` (and also added in `<span>` to help the CSS for an animation on the colons):

    var currentTime = `${hour}<span class="blink">:</span>${minute}<span class="blink">:</span>${second}`;

Finally, I needed to display the time in the HTML:

    document.getElementById('time').innerHTML=currentTime;
    }
    
And with that, we had a way to display the time. 

_"Easy."_  [/s](https://www.urbandictionary.com/define.php?term=%2FS)

But the time didn't update without refreshing the page.

For that, I needed to use `setInterval()`:

    setInterval(updateTime, 1000)
    
And with that, I had a clock that updated every 1000 milliseconds.

My next challenge was getting the alarms to work. 

My first attempt at alarms ran directly from HTML, like so: 

HTML: 

    <button onclick="setTimeout(alarm, 600000)">TEN MINUTE ALARM</button>

JS: 

    function alarm() {
    document.getElementById('alertSound').play();
    alert('!');
    }

This used the button click to call the alarm function to set off a sound file and an alert. This technically worked, but I read this week that calling the function from HTML is not considered "best practice." The alarm sound and the visible alert also ran a few seconds apart, which wasn't great. 

I had to do something else.

I removed the function call from HTML and moved the calls to Javascript:

HTML: 

    <button id="eightHour">EIGHT HOUR ALARM</button>

    <button id="tenMinute">TEN MINUTE ALARM</button>
            
    <button id="tenSecond">TEN SECOND ALARM</button>

JS:

    // variables to run different alarms
    var eightHour = document.getElementById('eightHour');
    var tenMinute = document.getElementById('tenMinute');
    var tenSecond = document.getElementById('tenSecond');

    // function calls for alarms

    tenSecond.onclick = setTimeout(alarm, 10000);

The alarms ran instantly every time I clicked the alarm buttons, even though I'd included `setTimeout()` to make them wait a set amount of time before running. I struggled with this for a long while.
With input from Awesome Inc instructor Justin Hall, I switched to inline functions, like so: 

    eightHour.onclick = function () {setTimeout(alarm, 28800000);}
    tenMinute.onclick = function () {setTimeout(alarm, 600000);}
    tenSecond.onclick = function () {setTimeout(alarm, 10000);}
    
And thus the alarms worked with the proper countdowns.

I was able to get buttons for specific time increments working - 8 hour, ten-minute, and ten-second test alarms, but I've thus far been unable to get an alarm to set for a specific time of day. 

Roughly a third of my time on this project was spent on CSS - I found an excellent font for the clock numbers, and for the sound, I used the classic [alarm from every 80's clock radio](https://www.youtube.com/watch?v=aXieXlAbpQg). 

Once I have a better grasp of Javascript, I intend to come back to this project and set up an alarm that can be set for a specific time of day - for example, by typing in a specific time of day. I’d also like to incorporate a dark/light theme button, as well as responsive CSS.

—-

On Pseudo-code:
I have a bit of a block when it comes to pseudo-coding - I understand that it’s helpful, even necessary, but when I try to write pseudo-code I feel like I immediately forget how everything works. I have trouble translating what I’m trying to do with the code into English before I’ve written the code itself. 
From what I understand, Week Four of Bootcamp will have info on pseudo-code that should help me get past this block.

---

## Week Two
### 8/3/2021

---

This week has certainly been __*Awesome*__… 

I managed to take a vacation *and* complete all my work - **the joy of working remotely**! I flew to San Diego, getting a lot of work (mostly reading) done on the flights.  Despite the in-flight wifi not working, I was lucky enough to have most of the tabs for the reading open when the flight took off. A 3-hour layover in Atlanta definitely helped me find time to get work done too.

This week in the bootcamp, we did quite a bit of work in HTML and CSS, which I consider to be my “comfort zone” - I have a decent amount of experience from working with both in the Intro to Web Development course I took this spring before starting the Awesome bootcamp. Even so, I picked up quite a few new things, and I’m sure there’s a ton I can’t even conceive of at this point.

We did a bit of work on all of “the big three” (HTML, CSS, JS) in Grasshopper, a fantastic online learning program. The earliest lessons in Grasshopper start by giving you chunks of Javascript (in my opinion, the most challenging of the three by far) that you have to put in order, eventually working up to writing your own code. The system holds your hand a bit, especially in the beginning, but it is informative throughout. 

The module for this week contained information about Agile software development, which is a specific set of principles to create software in the best way possible.
I’d try to sum up the manifesto, but I feel it’s best to post it in its entirety - it’s only 68 words:

---

The Agile Manifesto

We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:

Individuals and interactions over processes and tools

Working software over comprehensive documentation

Customer collaboration over contract negotiation

Responding to change over following a plan

That is, while there is value in the items on the right, we value the items on the left more.

---

Pretty straightforward. 

The main project we worked on this week was a module on structuring a page of content using semantic elements. The module provides a page of HTML content and a CSS stylesheet. The two have to be linked by placing semantic elements in the HTML to match those in the CSS. As they're placed, the page rearranges itself into a more aesthetically pleasant website.

You can find the code for my completed site [here](https://github.com/tonybwatson/birdwatching).

Semantic elements include tags such as article, main, header, footer, etc. The type of semantic element describes what type of content should be placed within it. For example, a header typically contains introductory content like a logo or headings; footers generally contain author info, copyright information, etc. 

More in-depth info on semantic elements can be found at [W3Schools.com](https://www.w3schools.com/html/html5_semantic_elements.asp)

---

The biggest takeaway for me this week was the power of Chrome’s dev tools. They can be used to see what changes to CSS would look like, without having to directly change the CSS file. 

Going forward with this information will make changing CSS much easier in the future - it’s a far cry faster than my standard operating procedure of “make change in CSS, save CSS file, load in browser, repeat.” 
Dev tools can also be used to see what various pseudoclasses look like, and those pseudo classes can be turned on and off at will. Pseudo classes include ```:hover```, ```:visited```, and ```:active```. Basically, these are states when an element is affected by something - for example, hovering the mouse cursor over a button changing that button's color.

---

I picked up on a lot of stuff this week that I didn't in the Intro course.

I’m at a point in my coding journey where I don’t know **what** I don’t know. I hardly know what is possible, so I’m unsure of what I'm doing or where I'm going. Other bootcampers *(Is "bootcampers" the right word?)* keep mentioning ideas I'd never even thought about. For example, in one of our standup sessions this week, another bootcamper, Michael Chinn, mentioned he’d been working on trying to use PHP to convert Markdown to HTML and well...

![King from Hamilton](https://c.tenor.com/NVNbYh4AtM8AAAAC/hamilton-king-george.gif)

I struggle with imposter syndrome and explaining myself in general. 
When I encounter a problem, I tend to Google the answer first.  As I progress further in the bootcamp, I'm learning more relevant keywords and sites to find help faster.  When all else fails, it's nice to have our Slack group available to bounce ideas off of.  
I have trouble knowing when a project is “good enough.” I can figure out how to do most tasks, but explaining how I got to my answer/finished product has always been a problem for me, which is unfortunately not an answer the otherwise omnipotent Google can provide. Hopefully I'll be able to improve upon that lack of self-confidence as the bootcamp continues.

---

## Week One
### 8/25/2021

---

Thus far, my first week hasn't been what I'd expected. I figured we'd be starting with HTML, CSS, something along those lines. 

We're starting by learning to use the command line, Codeanywhere and Github. I knew absolutely nothing about any of these before we started, and after a bit of practice I'd consider myself "in need of tons more practice". 

No [Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect) here. 

I'm excited to become more familiar with Codeanywhere and Github, as well as the use of the command line - we're starting way outside my "comfort zone" of HTML and CSS.
I'm assuming by the end of bootcamp I'll be fairly proficient with all the systems we've been working with this week.

One last note... Reading through the list of commands for the terminal made me better understand this comic I remembered from XKCD...

![XKCD comic - A stick-figure tells his friend "Sudo make me a sandwich"](https://imgs.xkcd.com/comics/sandwich.png)
###### Sudo (SuperUser Do) allows users to perform tasks that require administrative permissions. So basically he's forcing the other stick figure to make the sandwich.

*Still* not funny. 🙄

---