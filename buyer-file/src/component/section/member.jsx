import React,{useEffect} from 'react'
import { Fragment} from "react";
import '../section/style.css'
import {useNavigate  } from "react-router-dom";



const Member = (props) => {
    const navigate =useNavigate();
    function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    }

    const handleUpload = async (e) =>{
        
        e.preventDefault();
        let link = getID();
        
        const requestOptions = {
            method: "POST",
            headers: {  
                "auth-token":localStorage.getItem('token')
                }            
        };
    const response = await fetch(
            `http://localhost:3001/api/team/newMember/${link}`,

            requestOptions
    );
    if(response.status === 200){
        props.showAlert("successfully joined the respective team","success");
        navigate("/");
    }else{
        props.showAlert("some error occurred","danger");
    }
    }
    return (
        <>
        <Fragment>
            <div className="coming-soon">
                <div className=" container">
                <button className="d-block default-button" onClick = {handleUpload}><span>JOIN TEAM</span></button>
                </div>
            </div>
        </Fragment>
        </>
    );
}

export default Member