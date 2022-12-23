import { Component, Fragment,useState,useEffect } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Author from "../component/section/author";
import CommentForm from "../component/section/commentform";
import Comments from "../component/section/comments";
import Archive from "../component/sidebar/archive";
import CategorieTwo from "../component/sidebar/categorietwo";
import Instagram from "../component/sidebar/instagram";
import RecentPost from "../component/sidebar/recentpost";
import SearchBar from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";
import queryString from 'query-string';


const BlogDetailsFunction = (props)=>{

    const [BlogContent, setBlogContent] = useState({body:[]});
    function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    };
    useEffect(() => {
		const getBlog = async ()=>{
            let val = getID();
        const requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id: val})
            };
            const response = await fetch(
                `http://localhost:3001/api/blog/getById`,
                requestOptions
            );
			const data = await response.json();
            if(response.status===200){
                if(data.blogs){
                    let d = data.blogs.body.split("{Image}");
                    let b = [];
                    for(let i =1;i<d.length;i++){
                        b.push(d[i]);
                    }
                    let im = [];
                    for(let i =1;i<data.blogs.image.length;i++){
                        im.push(data.blogs.image[i]);
                    }
                    setBlogContent({
                        title: data.blogs.title,
                        title_image: data.blogs.image[0].link,
                        date: data.blogs.date,
                        author: data.blogs.author.username,
                        comment_number: data.blogs.comments.length,
                        body: b,
                        images: im
                    });
                }
            }
    };
		getBlog();
	}, []);
    return (
        <>
        <Header />
                <PageHeader title={BlogContent.title} curPage={'Blog Details'} />
                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <div className="post-item-2">
                                            <div className="post-inner">

                                                <div className="post-thumb">
                                                    <img src={BlogContent.title_image} alt="blog" />
                                                </div>
                                                <div className="post-content">
                                                    <h2>{BlogContent.title}</h2>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i>{BlogContent.date}</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">{BlogContent.author}</a></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">{BlogContent.comment_number} Comments</a></span></li>
                                                    </ul>
                                                    {BlogContent.body.map((val, i) => (
                                                        <>
                                                        <div className="post-thumb mb-30"><img src={BlogContent.images[i]} alt="blog-img" /></div>
                                                        <p>{val}</p>
                                                        </>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>


                                        <Comments />
                                        <CommentForm />
                                    </article>
                                </div>


                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SearchBar />
                                        <RecentPost />
                                        <CategorieTwo />
                                        <Instagram />
                                        <Archive />
                                        <Tags />
                                    </aside>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
        </>
    );
};
class BlogDetails extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <Fragment>
                <BlogDetailsFunction props= {this.props}/>
            </Fragment>
        );
    }
}


// <div className="post-thumb mb-30">
//                                                         <img src="assets/images/blog/single/03.jpg" alt="blog" />
//                                                         <a href="https://www.youtube.com/embed/ZgMw__KdjiI" className="play-btn" target="_blank">
//                                                             <i className="icofont-play"></i>
//                                                             <span className="pluse_2"></span>
//                                                         </a>
//                                                     </div>


//Blogs movement
// <div className="article-pagination">
//                                             <div className="prev-article">
//                                                 <a href="#"><i className="icofont-rounded-double-left"></i>Previous Article</a>
//                                                 <p>Evisculate Parallel Processes via Technica Sound Models Authoritative</p>
//                                             </div>
//                                             <div className="next-article">
//                                                 <a href="#">Next Article <i className="icofont-rounded-double-right"></i></a>
//                                                 <p>Qvisculate Parallel Processes via Technica Sound Models Authoritative</p>
//                                             </div>
//                                         </div>



//Tags
// <div className="tags-area">
//                                                         <ul className="tags lab-ul justify-content-center">
//                                                             <li>
//                                                                 <a href="#">Charity</a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#" className="active">NoneProfit</a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#">Admission</a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#">Exams</a>
//                                                             </li>
//                                                         </ul>
//                                                         <ul className="share lab-ul justify-content-center">
//                                                             <li>
//                                                                 <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#" className="dribble"><i className="icofont-dribbble"></i></a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
//                                                             </li>
//                                                             <li>
//                                                                 <a href="#" className="google"><i className="icofont-google-plus"></i></a>
//                                                             </li>
//                                                         </ul>
//                                                     </div>


//Quotes
// <blockquote className="single-quote mb-30">
//                                                         <div className="quotes">
//                                                             Dynamicaly recaptiuaze distribute technologies wherease 
//                                                             turnkey channels and onotonec provide aces to resource
//                                                             levelng expert vias worldwide deverabes uoliticly extend 
//                                                             aserser are diverse vortals. 
//                                                             <span>...Melissa Hunter</span>
//                                                         </div>
//                                                     </blockquote>
 
export default BlogDetails;