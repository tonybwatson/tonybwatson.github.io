import React from 'react'

export default function SplashPage() {
    return (
        <>
        <div className="container bg-dark text-info">
        
        <div className="row">
            <h1><strong>Hi.</strong></h1>
            <h4>My name is </h4>
            <h1><strong><u>Tony Watson</u></strong>.</h1>
        </div>
        <div className="row">
            <h2>I'm an aspiring web developer.</h2>
        </div>
        </div>
        <h2>While you're here, learn a little bit <a href="./components/AboutMe.js" className="link-warning">about me</a>.</h2>
            <h2>Have a look at my <a href="./pages/Portfolio.js" className="link-warning">portfolio</a>.</h2>
        </>
    )
}
