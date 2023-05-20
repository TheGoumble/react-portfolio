export default function TimeStamp({ data: { year, title, content  } }) {
  return (
    <div className="timestamp">
      <h3>{year}</h3>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  )
}
