import Header from "../components/Header"
import {useNavigation,useLocation} from 'react-router-dom';
import Pagging from "../components/Pagging";
import Blog from "../components/Blog";



const TagPage=()=>{
    const navigation=useNavigation();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);

    return(
        <div>
           <Header/>
           <div>
            <button onClick={()=>navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs Tagged<span>#{tag}</span>
            </h2>
           </div>
        <Blog/>
        <Pagging/>
        </div>
        
    )
}
export default TagPage