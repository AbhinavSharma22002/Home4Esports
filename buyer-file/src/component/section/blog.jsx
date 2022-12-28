import { useState,useEffect } from "react";
import Blog from "../layout/Blog";
const subtitle = "our recent news";
const title = "Our Most Popular Blog posts";


const BlogSectionFunction = ()=>{
    const [BlogListContent,setBlogListContent] = useState([]);

    
    useEffect(()=>{
        const someFunc = async ()=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/blog/getAll`,
                requestOptions
            )
            const data = await response.json();
            for(let i = 0;i<data.blogs.length;i++){
                array.push({
                    imgUrl: `${data.blogs[i].image[0].link}`,
                    title: `${data.blogs[i].title}`,
                    desc: `${data.blogs[i].body.split("{Image}")[1]}`,
                    pubAuthor: `${data.blogs[i].author.username}`,
                    pubDate: `${data.blogs[i].date}`,
                    btnText: 'read more',
                    to: `${data.blogs[i]._id}`
                });
            }
            setBlogListContent(array);
    };
            someFunc();
    },[]);
    
return (
    <>{
        (BlogListContent.length!==0)?(<>
        <div className="blog-section padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/blog/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
                            {BlogListContent.map((val, i) => (
                                <Blog val={val} key={i}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>):(<></>)
    }
   
    </>
);
};
 
export default BlogSectionFunction;