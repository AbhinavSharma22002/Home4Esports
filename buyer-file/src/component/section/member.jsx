import React,{useEffect,useState} from 'react'
import { Fragment} from "react";
import '../section/style.css'
import {useNavigate  } from "react-router-dom";



const Member = (props) => {
    const[image,setImage] = useState('');
    function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    }
    const navigate = useNavigate();
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
        const response = await fetch(
                `http://localhost:3001/aws/image/upload`,
                requestOptions
        );
		const data = await response.json();
        setImage(data.val)
    }
    const handleUpload = async (e) =>{
        
        e.preventDefault();
        let link = getID();
        const data = {image};
        const requestOptions = {
            method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token'),
                    'Content-Type': 'application/json' 
                },
                body :  JSON.stringify(data),

        };
    const response = await fetch(
            `http://localhost:3001/api/team/newMember/${link}`,
            requestOptions
    );
    if(response.status === 200){
        props.showAlert("successfully joined the respective team","success");
        navigate("/");
    }else if(response.status===401){
        props.showAlert("Please Login In","danger");
        navigate("/login");
    }
    else{
        props.showAlert("Some Error Occured","danger");
    }
    }
    return (
        <>
        <Fragment>
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <form className="account-form">
                           
                            <div className="form-group">
                            <label for="tournamentImage">Your Image</label>
                                <input 
                                    type="file"
                                    name=""
                                    id="tournamentImage"
                                    onChange={addFile}
                                    placeholder="Please Select Tournament Image*"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>JOIN TEAM</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        
        </Fragment>
        </>
    );
}

export default Member