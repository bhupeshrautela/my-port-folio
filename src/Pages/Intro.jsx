import React from 'react'

import { ReactTyped } from 'react-typed'
function Intro() {

  let text=[
  "Frontend Developer",
  "React Developer",
  "JavaScript Enthusiast",
  "UI/UX Enthusiast",
  "Responsive Web Designer"
]

  return (
    <>
    <section id='introduction'>
      <div id='hero'>
      <h1>hi i am <span id='name'>Bhupesh </span></h1>
           <h2><ReactTyped strings={text} typeSpeed={200} loop/></h2>
      <p>

I create modern, responsive, and user-friendly
web applications with a focus on performance,
clean code, and great user experience.</p>
<a href="/resume.pdf" id='resume' downloadf>resume</a>

      </div>

      <div id='myprofile'>
        <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww" alt="" />
        </div>
        
      </section>
    </>
  )
}

export default Intro

