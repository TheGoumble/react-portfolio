import React, { useState, useEffect } from "react"

export default function Background() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    function generateStars() {
      const newStars = []
      const numStars = Math.floor(window.innerWidth / 5)
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const size = Math.random() * 2 + 1
        newStars.push({ x, y, size })
      }
      setStars(newStars)
    }
    generateStars()
    window.addEventListener("resize", generateStars)
    return () => window.removeEventListener("resize", generateStars)
  }, [])

  return (
    <div className="Background">
      {stars.map((star, index) => (
        <div
          key={index}
          className="Star"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            transition: `opacity ${Math.random() * 2 + 1}s`,
          }}
        />
      ))}
    </div>
  )
}
