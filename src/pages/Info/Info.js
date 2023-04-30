import data from "../../data/data.json"
import { useParams } from "react-router-dom"

export default function Info() {
  const { name } = useParams()
  let siteData = {}

  for (let i = 0; i <= data.length; i++) {
    if (name === data[i].title) {
      siteData = data[i]
      console.log(data[i])
      break
    }
  }

  return (
    <section>
      <h2>This site stuff {name}</h2>
      <p>{siteData.language}</p>
      <p>{siteData.tech}</p>
      <h4>{siteData.content}</h4>
    </section>
  )
}
