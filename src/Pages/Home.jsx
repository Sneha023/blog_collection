import Blog from "../components/Blog";
import Header from "../components/Header";
import Pagging from "../components/Pagging";


const Home=()=>{
    return(
        <div className="flex flex-col justify-center items-center w-full">
            <Header/>
            <div>
                <Blog/>
                <Pagging/>
            </div>
        </div>
    )
}
export default Home