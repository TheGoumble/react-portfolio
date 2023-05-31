import React, { useState, useEffect, useRef } from "react"

export default function TimeStamp({ data: { year, title, content } }) {
  const [backgroundWidth, setBackgroundWidth] = useState(0)

  return (
    <div className="timestamp">
      <h3 className="year">{year}</h3>
      <h5>{title}</h5>

      <p>{content}</p>
    </div>
  )
}
