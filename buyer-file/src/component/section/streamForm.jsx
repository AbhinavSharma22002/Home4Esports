import { Fragment, useState } from "react";
import {useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";



const StreamForm = (props)=>{
    const title = "Video Stream Form";

    const [videoTitle,setVideoTitle] = useState('');
    const [videoGenre,setVideoGenre] = useState('');
    const [link,setLink] = useState('');
    const [image,setImage] = useState('');

    const navigate =useNavigate();
    const addFile = async (e)=>{
        const formData = new FormData();
        formData.append("image",e.target.files[0]);
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token')
                    },
                body : formData                
            };
        const response = await fetch(`http://localhost:3001/aws/image/upload`,requestOptions);
		const data = await response.json();
        setImage(data.val)
    }
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            videoTitle,videoGenre,link,image
        };
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(`http://localhost:3001/api/video/create`,requestOptions);
        if(response.status===200){
            props.showAlert("Stream Created Success!!","success");
            navigate("/");
        }
    }

    return (
        <>
        <Fragment>

            <PageHeader title={'Video Stream PAGE '} curPage={'Video Stream form'} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={videoTitle} 
                                    onChange={(e)=>{setVideoTitle(e.target.value);}}
                                    placeholder="Enter Video Title*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={videoGenre} 
                                    onChange={(e)=>{setVideoGenre(e.target.value);}}
                                    placeholder="Enter Video Genre *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="url"
                                    name=""
                                    id=""
                                    value={link} 
                                    onChange={(e)=>{setLink(e.target.value);}}
                                    placeholder="Enter Video Link *"
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="image">Image</label>
                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile}
                                    placeholder="Please Select Product Image*"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>Upload Video Stream</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </Fragment>
        </>
    );
}


 
export default StreamForm;