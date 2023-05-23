import { Col, Card } from "../../utilis/Bootstrap.js"
import { Laptop, InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import "./gallery.css"
function Svg(svg) {
  return (
    <div>
      <svg
        class="waves-effect"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 2 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(156,206,203,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(156,206,203,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(156,206,203,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#9CCECB" />
        </g>
      </svg>
    </div>
  )
}

export default function GalleryCard({
  data: { id, title, tech, language, website, style, svg },
}) {
  return (
    <Col key={id} className="button-effect">
      <Card className={`${style}`}>
        <article className="card-body p-3 d-flex align-content-between justify-content-center flex-wrap projects ">
          <div className="header">
            <h2 className="d-flex justify-content-center">
              <a href={website} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <div>
              <p className="mb-0 pb-0 author d-flex justify-content-center">
                {language}
              </p>
              <p className="mt-0 pt-0 prior text-center">
                <small>{tech}</small>
              </p>
            </div>
          </div>
            {/* {style === "waves" ? <Svg svg={svg} /> : ""} 
            this is for the waves animation that I haven't got working yet*/}
          <div id="btn-group" className="d-flex justify-content-around w-100">
            <Link to={`${website}`}>
              <Laptop size={27} target="_blank" rel="noreferrer" /> Website
            </Link>
            <Link to={`/${title}`}>
              <InfoCircleFill size={27} /> about
            </Link>
          </div>
        </article>
      </Card>
    </Col>
  )
}
