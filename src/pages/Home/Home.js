import Gallery from "../../components/Gallery/List";
import Header from "../../components/Header/Header";
import TimeLine from "../../components/TimeLine/TimeLine";

export default function Home(){
    return(
       <section>
        <Header/>
        <Gallery/>
        <TimeLine/>
       </section>
    )
}