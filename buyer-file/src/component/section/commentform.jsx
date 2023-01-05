import { Component,useState } from "react";

const title = "Leave a Comment";

const CommentForm = (props)=>{
    
    const [respondName, setRespondName] = useState('');
    const [respondEmail, setRespondEmail] = useState('');
    const [respondSubject, setRespondSubject] = useState('');
    const [respondMassage, setRespondMassage] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            respondName,respondEmail,respondSubject,respondMassage,id: props.id
        };
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(
                `http://localhost:3001/api/blog/createComment`,
                requestOptions
        );
        const responseData = await response.json();
        if(response.status===200){
            props.showAlert("commented Success!!","success");
            props.comments.push(responseData);
        }
    }
    return (
        <>
            <div id="respond" className="comment-respond">
                <h6 className="h7">{title}</h6>
                <div className="add-comment">
                    <form action="#" method="post" id="commentform" className="comment-form">
                        <input
                            type="text"
                            name="name"
                            id="item01"
                            value={respondName}
                            onChange={(e)=>{setRespondName(e.target.value)}}
                            placeholder="Your Name *"
                        />
                        <input 
                            type="text"
                            name="email"
                            id="item02"
                            value={respondEmail}
                            onChange={(e)=>{setRespondEmail(e.target.value)}}
                            placeholder="Your email *" 
                        />
                        <input 
                            type="text"
                            name="subject"
                            id="item03"
                            className="w-100"
                            value={respondSubject}
                            onChange={(e)=>{setRespondSubject(e.target.value)}}
                            placeholder="Write a Subject"
                        />
                        <textarea 
                            rows="7" 
                            type="text"
                            id="item04"
                            name="message"
                            value={respondMassage}
                            onChange={(e)=>{setRespondMassage(e.target.value)}}
                            placeholder="Your Message"
                        ></textarea>
                        <button type="submit" className="default-button" onClick={handleSubmit}><span>Send Comment</span></button>
                    </form>
                </div>
            </div>

        </>
    );
};
 
export default CommentForm;