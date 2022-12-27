import { Fragment, useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";
const CreateBlog = (props)=>{
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [noImage,setNoImage] = useState(0);
    const [noVideo,setNoVideo] = useState(0);
    const [clicked,setClicked] = useState(false);
    const [image,setImage] = useState([]);
    
    const navigate =useNavigate();
    const handleSave=(e)=>{
        e.preventDefault();
        setClicked(true);
        let r = body.indexOf('{Image}');
        let c = 0;
        while (r !== -1) {
            c++;
            r = body.indexOf('{Image}', r + 1);
        }
        setNoImage(c);
        r = body.indexOf('{Video}');
        c = 0;
        while (r !== -1) {
            c++;
            r = body.indexOf('{Video}', r + 1);
        }
        setNoVideo(c);
    }
    const addFile = async (e)=>{
        let pk1 = e.target.getAttribute("data-pk");
        const formData = new FormData();
        formData.append("image",e.target.files[0]);
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token')
                    },
                body : formData                
            };
        const response = await fetch(
                `http://localhost:3001/aws/image/upload`,
                requestOptions
        );
		const data = await response.json();
        image.push({
           link : data.val,
           pk: pk1
        })
    }
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            title,image,body
        };
        console.log(data);
        const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(data),
            };
            const response = await fetch(
                `http://localhost:3001/api/blog/create`,
                requestOptions
        );
        if(response.status===200){

            props.showAlert("Blog Created!!","success");
            navigate("/");
        }
    }
    return (
        <><Fragment>
                <PageHeader title={'Blog Creation Page '} curPage={'Blog Creation form'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">Blog Creation Form</h3>
                            <form className="account-form">
                                <div className="form-group">
                                        <textarea name="" id="" cols="3" rows="1" value={title} onChange={(e)=>{setTitle(e.target.value);}} placeholder=' Blog Title'></textarea>
                                </div>
                                <div className="form-group">
                                
                                        <textarea name="" id="" cols="30" rows="15" value={body} onChange={(e)=>{setBody(e.target.value);}} placeholder='Write Blog Body Here...'></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button" 
                                    onClick = {handleSave}
                                    ><span>Save</span></button>
                                </div>
                            </form>
                        </div>
                        {clicked?(<>
                        < div className="image-input">
                            <form className="account-form">
                                    {Array.from({ length: noImage }, (value, key) => {
                                        return (
                                            <>
                                            <div className="form-group">
                                            <label htmlFor={`image${key+1}`}>Image {key+1}</label>
                                            <input type="file" id={`image${key+1}`} data-pk={key+1} onChange={addFile}/>
                                            </div>
                                            </>
                                        );
                                    })}
                                    {Array.from({ length: noVideo }, (value, key) => {
                                        return (
                                            <div>
                                            <div className="form-group">
                                            <label htmlFor={`video${key+1}`}>Video {key+1}</label>
                                            <input type="text" id={`Video${key+1}`}/>
                                            </div>
                                            </div>
                                        );
                                    })}
                                    <div className="form-group">
                                    <button className="d-block default-button" 
                                    onClick = {handleUpload}
                                    ><span>Upload</span></button>
                                </div>
                                </form>
                        </div>
                        </>):(<></>)}
                        
                    </div>
                </div>
                
            </Fragment>

        </>
    );
}
export default CreateBlog;