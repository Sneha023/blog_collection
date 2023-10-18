import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

export default function Blog() {
    const {loading,posts}=useContext(AppContext);
    

    return(
        <div className="h-screen justify-center items-center w-11/12 max-w-[450px] mb-[70px] py-3 flex flex-col gap-y-7 mt-[64px]">
            {
                loading ? 
                (<Spinner/>):
                (
                    posts.length==0 ?
                    (<div><p>No Posts Available</p></div>):
                    (posts.map((post)=>(
                        <div key={post.id}>
                            <p className="font-bold text-xs">{post.title}</p>
                            <p className="text-[10px]">
                                By<span className="italic">{post.author}</span> on <span className="underline text-bold">{post.category}</span>
                            </p>
                            <p className="text-[10px]">Posted on {post.date}</p>
                            <p className="text-[11px] mt-[10px]">{post.content}</p>
                            <div className="flex gap-x-3">
                                {post.tags.map((tag,index)=>{
                                    return <spam key={index} className="text-blue-500 underline font-bold text-[8px]">{`#${tag}`}</spam>
                                })}
                            </div>

                        </div>
                    )))
                )
            }
        </div>
    );
}