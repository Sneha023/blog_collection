import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagging from "./components/Pagging";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import {Route,Routes,useSearchParams} from "react-router-dom";
import {useLocation} from "react-router-dom"
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import "./App.css";

export default function App() {
  const { fetchBlogsPosts } = useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();
  const location =useLocation();

  useEffect(() => {
      const page=searchParams.get("page")?? 1;
      if(location.pathname.includes("tags")){
        const tag=location.pathname.split("/").at(-1).replace("_","");
        fetchBlogsPosts(Number(page),tag);
      }
      else if(location.pathname.includes("categories")){
        const category = location.pathname.split("/").at(-1).replaceAll("_"," ");
        fetchBlogsPosts(Number(page),null,category);
      }
      else{
        fetchBlogsPosts(Number(page));
      }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog//:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />

      <Route path="/categories/:category" element={<CategoryPage />} />


    </Routes>
  );
}
