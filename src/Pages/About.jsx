import React from 'react'
import ProfileCard from '../Components/ProfileCard'
import {profileData} from "../data"
function About() {
  return (
 <section id='about'>
  <h2>About</h2>

  <div id='myinfo'>

  <p>I'm a passionate Frontend Developer who enjoys building responsive, modern, and user-friendly web applications. I work with HTML, CSS, JavaScript, and React to create clean and interactive user interfaces. I love learning new technologies and improving my skills by building real-world projects. I'm currently seeking a Frontend Developer Internship where I can contribute, learn from experienced developers, and grow as a software engineer.
</p>

  <div id='profileCard'>
   {profileData.map((profile)=>{
    return(
      <ProfileCard key={profile.profileId} profileLink={profile.profileLink} profileLogo={profile.profileLogo}/>
    )
   })}
  </div>

</div>
 
 </section>
  )
}

export default About

