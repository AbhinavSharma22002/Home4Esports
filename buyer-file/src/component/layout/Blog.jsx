import { Link } from "react-router-dom";


const Blog = (props)=>{

    return (
        <>
                            <div className="col">
                                    <div className="blog-item">
                                            <div className="blog-inner">
                                                <div className="blog-thumb">
                                                    <Link to="/blog-single">
                                                        <img 
                                                            src={`${props.val.imgUrl}`} 
                                                            alt="Blog Thumb" 
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="blog-content px-3 py-4">
                                                    <Link to="/blog-single"><h3>{props.val.title}</h3></Link>
                                                    <div className="meta-post">
                                                        <a href="#">{props.val.pubAuthor}</a>
                                                        <a href="#">{props.val.pubDate}</a>
                                                    </div>
                                                    <p>{props.val.desc}</p>
                                                    <Link to={`/blog-single?id=${props.val.to}`} className="default-button reverse-effect"><span>{props.val.btnText} <i className="icofont-arrow-right"></i></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </>
    );
};

export default Blog;

