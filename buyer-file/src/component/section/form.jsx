import { Fragment, useState } from "react";
import {useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";



const StreamForm = (props)=>{
    const title = "Tournament";

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [game,setGame] = useState('');
    const [size,setSize] = useState('');
    const [time,setTime] = useState('');

    const navigate = useNavigate();

    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            name,description,game,size,time
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
                `http://localhost:3001/api/video/create`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Stream Created Success!!","success");
            navigate("/");
        }
    }

    return (
        <>
        <Fragment>

            <PageHeader title={'Tournament'} curPage={'Tournament'} />
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
                                    value={name} 
                                    onChange={(e)=>{setName(e.target.value);}}
                                    placeholder="Enter Your Name*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={description} 
                                    onChange={(e)=>{setDescription(e.target.value);}}
                                    placeholder="Enter Description*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="search"
                                    name=""
                                    id=""
                                    value={game} 
                                    onChange={(e)=>{setGame(e.target.value);}}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="number"
                                    name=""
                                    id="size"
                                    value={size}
                                    onChange={(e)=>{setSize(e.target.value);}}
                                    placeholder="Team Size*"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="date"
                                    name=""
                                    id="time"
                                    value={time}
                                    onChange={(e)=>{setTime(e.target.value);}}
                                    placeholder="Start Time*"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>Submit</span></button>
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