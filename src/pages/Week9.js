import React from 'react'

export default function Week9() {
    return (
        <div className="container">
            <div className="card bg-dark border border-info">
                <div className="card-body">
                    <h5 className="card-title">Week Nine - On the Command Line Interface and Frameworks</h5>
                    <h6 className="card-subtitle mb-2 text-muted">10/18/21 - 10/22/21</h6>
                    <p className="card-text text-start">
                        When the bootcamp first started, the command line terrified me.<br></br>
                        Every time I typed something in, I half-expected to mistype something and brick my computer.<br></br>
                        Luckily, ruining a computer isn't that easy, and minor errors usually only set me back by a little bit, if at all.<br></br>
                        <hr></hr>
                        If I were to build my own Command Line interface, I'd like to include predictive typing - something that would help avoid accidentally sending the wrong command.<br></br>
                        I'd also like to shorten some of the commands -- a git commit takes several lines of code, and I'd prefer to commit with less effort for minor commits.<br></br>
                        A push to main should take a bit of thought and effort, so that it isn't sent all willy-nilly, but just saving after a few changes shouldn't take 3 lines of code.<br></br>
                        The fewer lines I have to type on the CLI, the fewer chances I have to make a typing error.<br></br>
                        <hr></hr>
                        <h2>On the usefulness of frameworks:</h2>
                        Without a framework, anything much more complicated than a simple app is much harder.<br></br> 
                        The more moving parts in the project, the more building it without a framework becomes like eating a clock: </p>
                        <h4 className="text-start"><em>Time-consuming</em>.</h4><br></br>
                        <iframe width="500" height="250" src="https://www.youtube.com/embed/8X_Ot0k4XJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="card-text text-start">
                        Frameworks make wrangling all the different parts of a project easier; they can be compartmentalized.
                    </p>
                </div>
            </div>
        </div>
    )
}
