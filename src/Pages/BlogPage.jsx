import { useContext, useState } from "react"
import {useLocation,useNavigation} from 'react-router-dom';
import { baseUrl } from "../baseUrl";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Pagging from "../components/Pagging";
import { AppContext } from "../context/AppContext";

const BlogPage=()=>{
    const [blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location =useLocation();
    const navigation=useNavigation();
    const {loading,setLoading}=useContext(AppContext);
    const blogId =location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url =`${baseUrl}?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data =await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){

        }
    }

    return(
        <div>
            <Header/>
            <div>
                <Blog/>
                <Pagging/>
            </div>
        </div>
    )
}
export default BlogPage