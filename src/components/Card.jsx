import React from 'react'
import { useState } from 'react'
import "./Card.css"

const Card = (data) => {
  const {name,img,options} = data

  const [click, setClick] = useState(true)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div>
    {click ?
        <div className="card" onClick={handleClick}>
          <img src={img} alt="img"/>
          <p>{name}</p>
        </div>
        :
        <div className="card" onClick={handleClick}>
          <ul>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
          </ul>
        </div>
    } 
    </div>
  )
}

export default Card;