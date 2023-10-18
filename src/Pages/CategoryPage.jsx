import Header from "../components/Header"
import {useNavigation,useLocation} from 'react-router-dom';
import Blog from "../components/Blog";
import Pagging from "../components/Pagging";

const CategoryPage=()=>{
    const navigation=useNavigation();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    return(
        <div>
           <Header/>
           <div>
            <button onClick={()=>navigation(-1)}>
                Back
            </button>
            <h2>
                Blogs on <span>{category}</span>
            </h2>
           </div>
           <Blog/>
           <Pagging/>
        </div>
    )
}
export default CategoryPage