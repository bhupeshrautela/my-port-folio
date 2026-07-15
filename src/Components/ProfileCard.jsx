import React from 'react'

function ProfileCard({profileLink,profileLogo}) {
  return (
    <div className='profileBox'>
       <a href={profileLink} className='profileLink'>
        <img src={profileLogo} alt="" />
       </a>
      
    </div>
  )
}

export default ProfileCard
