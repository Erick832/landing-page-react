import React from 'react'
import MainBox from './MainBox'
import img1 from "../images/img-1.jpg"

function Main() {
  return (
    <main className="main-home">
      <MainBox />
      <img className="img-1" src={img1} alt="" />
    </main>
  )
}

export default Main