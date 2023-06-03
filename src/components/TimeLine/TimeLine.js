import React, { useState } from "react"
import data from "../../data/timeline.json"
import TimeStamp from "./TimeStamp"
import "./timeline.css"
import SpaceGoumble from "../../assets/svg/space-goumble-01.svg"
import SpaceShip from "../../assets/svg/spaceship-01.svg"

export default function TimeLine() {
  const [wireLength, setWireLength] = useState(200)

  const handleSpaceManMove = () => {
    setWireLength(Math.random() * 100 + 150)
  }

  return (
    <>
      <div className="space-items">
        <img src={SpaceShip} id="space-ship" />

        <marquee
          direction="down"
          width="50%"
          height="100%"
          behavior="alternate"
        >
          <marquee behavior="alternate" width="100%" height="100%">
            <div id="space-goumble">
              <img src={SpaceGoumble}  />
            </div>
          </marquee>
        </marquee>
      </div>
      <section className="timeline">
        <div className="time-container">
          {data.map((element) => {
            return !element ? (
              <p>Loading</p>
            ) : (
              <TimeStamp data={element} key={element.year} />
            )
          })}
        </div>
      </section>
    </>
  )
}
