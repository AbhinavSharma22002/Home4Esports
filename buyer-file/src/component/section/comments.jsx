import { Component } from "react";

const Comments = (props)=>{
console.log(props);
return (
    <>
     <div id="comments" className="comments">
                <h6 className="comment-title h7">{props.comments.length} Comments</h6>
                <ul className="lab-ul comment-list">
                    {props.comments.map((val, i) => (
                        <li className="comment" key={i}>
                            <div className="com-item">
                                <div className="com-content">
                                    <div className="com-title">
                                        <div className="com-title-meta">
                                            <a href="#" rel="external nofollow" className="h7">{val.Name}</a>
                                            <span>{val.Date}</span>
                                        </div>
                                    </div>
                                    <p>{val.Massage}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
    </>
);
};
 
/*

                                        <span className="reply">
                                            <a className="comment-reply-link" href="#"><i className="icofont-reply-all"></i>Reply</a>
                                        </span>
*/

export default Comments;