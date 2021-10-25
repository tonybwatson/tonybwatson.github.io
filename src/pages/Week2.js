import React from 'react'

export default function Week2() {
    return (
        <div className="container">
            <div className="card bg-dark border border-info">
                <div className="card-body">
                    <h5 className="card-title">Week Two</h5>
                    <h6 className="card-subtitle mb-2 text-muted">9/3/21</h6>
                    <p className="card-text text-start">
                        This week has certainly been <em>Awesome</em>…

                        I managed to take a vacation <em>and</em> complete all my work - <em>the joy of working remotely</em>! I flew to San Diego, getting a lot of work (mostly reading) done on the flights.  Despite the in-flight wifi not working, I was lucky enough to have most of the tabs for the reading open when the flight took off. A 3-hour layover in Atlanta definitely helped me find time to get work done too.<br></br>

                        This week in the bootcamp, we did quite a bit of work in HTML and CSS, which I consider to be my “comfort zone” - I have a decent amount of experience from working with both in the Intro to Web Development course I took this spring before starting the Awesome bootcamp. Even so, I picked up quite a few new things, and I’m sure there’s a ton I can’t even conceive of at this point.<br></br>

                        We did a bit of work on all of “the big three” (HTML, CSS, JS) in Grasshopper, a fantastic online learning program. The earliest lessons in Grasshopper start by giving you chunks of Javascript (in my opinion, the most challenging of the three by far) that you have to put in order, eventually working up to writing your own code. The system holds your hand a bit, especially in the beginning, but it is informative throughout.<br></br>

                        The module for this week contained information about Agile software development, which is a specific set of principles to create software in the best way possible.<br></br>
                        I’d try to sum up the manifesto, but I feel it’s best to post it in its entirety - it’s only 68 words:<br></br>

                        <hr></hr>

                        <u>The Agile Manifesto</u><br></br>

                        We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:
                        <ul>
                            <li>Individuals and interactions over processes and tools</li>

                            <li>Working software over comprehensive documentation</li>

                            <li>Customer collaboration over contract negotiation</li>

                            <li>Responding to change over following a plan</li>
                        </ul>
                        That is, while there is value in the items on the right, we value the items on the left more.

                        <hr></hr>

                        Pretty straightforward.<br></br>

                        The main project we worked on this week was a module on structuring a page of content using semantic elements. The module provides a page of HTML content and a CSS stylesheet. The two have to be linked by placing semantic elements in the HTML to match those in the CSS. As they're placed, the page rearranges itself into a more aesthetically pleasant website.<br></br>

                        You can find the code for my completed site <a href="https://github.com/tonybwatson/birdwatching">here</a>.

                        Semantic elements include tags such as article, main, header, footer, etc. The type of semantic element describes what type of content should be placed within it. For example, a header typically contains introductory content like a logo or headings; footers generally contain author info, copyright information, etc.

                        More in-depth info on semantic elements can be found at [W3Schools.com](https://www.w3schools.com/html/html5_semantic_elements.asp)

                        ---

                        The biggest takeaway for me this week was the power of Chrome’s dev tools. They can be used to see what changes to CSS would look like, without having to directly change the CSS file.

                        Going forward with this information will make changing CSS much easier in the future - it’s a far cry faster than my standard operating procedure of “make change in CSS, save CSS file, load in browser, repeat.”
                        Dev tools can also be used to see what various pseudoclasses look like, and those pseudo classes can be turned on and off at will. Pseudo classes include ```:hover```, ```:visited```, and ```:active```. Basically, these are states when an element is affected by something - for example, hovering the mouse cursor over a button changing that button's color.

                        ---

                        I picked up on a lot of stuff this week that I didn't in the Intro course.

                        I’m at a point in my coding journey where I don’t know **what** I don’t know. I hardly know what is possible, so I’m unsure of what I'm doing or where I'm going. Other bootcampers *(Is "bootcampers" the right word?)* keep mentioning ideas I'd never even thought about. For example, in one of our standup sessions this week, another bootcamper, Michael Chinn, mentioned he’d been working on trying to use PHP to convert Markdown to HTML and well...<br></br>

                        <img src="https://c.tenor.com/NVNbYh4AtM8AAAAC/hamilton-king-george.gif" alt="king from Hamilton saying, 'I wasn't aware that was something a person could do."></img>
                        <hr></hr>
                        I struggle with imposter syndrome and explaining myself in general.<br></br>
                        When I encounter a problem, I tend to Google the answer first.  As I progress further in the bootcamp, I'm learning more relevant keywords and sites to find help faster.  When all else fails, it's nice to have our Slack group available to bounce ideas off of.<br></br>
                        I have trouble knowing when a project is “good enough.” I can figure out how to do most tasks, but explaining how I got to my answer/finished product has always been a problem for me, which is unfortunately not an answer the otherwise omnipotent Google can provide. Hopefully I'll be able to improve upon that lack of self-confidence as the bootcamp continues.<br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}
