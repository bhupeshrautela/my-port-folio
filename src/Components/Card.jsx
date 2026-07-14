import React from 'react'

function Card({cardImage,titleName}) {
  return (
    <div className='cardContainer'>
      <div className='cardImage'>
        <img src={cardImage} alt="" />
      </div>
      <h3>{titleName}</h3>
      
    </div>
  )
}

export default Card
