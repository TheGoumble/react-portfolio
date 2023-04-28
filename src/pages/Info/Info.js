
import data from "../../data/data.json"
import { useParams } from "react-router-dom"


export default function Info(){
    const {name} = useParams()
    let siteData = {}
    
    for(let i = 0; i <= data.length; i++){
        if( name === data[i].title){
            siteData = data[i]
            console.log(data[i])
            break
        }
    }

    return( 
      <h2>This site stuff {name}</h2>
    )
}