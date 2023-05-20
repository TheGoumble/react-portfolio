import data from "../../data/timeline.json"
import TimeStamp from "./TimeStamp";
import "./timeline.css"

export default function TimeLine() {
    return (
  <section>
    {data.map((element) => {
          return !element ? <p>Loading</p> : <TimeStamp data={element} />
        })}
  </section>
    );
  }