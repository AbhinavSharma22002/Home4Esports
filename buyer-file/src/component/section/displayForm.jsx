import { Fragment, useState } from "react";
import {useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";



const DisplayForm = (props)=>{
    const heading = "Match Update Form";
        const [title,setTitle] = useState('');
    const [team1Logo,setTeam1Logo] = useState('');
    const [tournamentLogo,setTournamentLogo] = useState('');
    const [team2Logo,setTeam2Logo] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [videoLink,setVideoLink] = useState('');

    const navigate =useNavigate();
    const addFile1 = async (e)=>{
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
        setTeam1Logo(data.val)
    }

    const addFile2 = async (e)=>{
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
        setTeam2Logo(data.val)
    }

    const addFile3 = async (e)=>{
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
        setTournamentLogo(data.val)
    }

    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            team1Logo,team2Logo,date,videoLink,time,title,tournamentLogo
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
                `http://localhost:3001/api/display/create`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("Best Match Updated Success!!","success");
            navigate("/");
        }
    }

    return (
        <>
        <Fragment>

            <PageHeader title={'Biggest Match Form '} curPage={'biggest match form'} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{heading}</h3>
                        <form className="account-form">
                        <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={title} 
                                    onChange={(e)=>{setTitle(e.target.value);}}
                                    placeholder="Enter Title *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={time} 
                                    onChange={(e)=>{setTime(e.target.value);}}
                                    placeholder="Enter Time *"
                                />
                            </div>
                        <div className="form-group">
                        <label htmlFor="team1logo">Team 1 Logo</label>

                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile1}
                                    placeholder="Please Select Team1  Logo*"
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="team2logo">Team 2 Logo</label>

                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile2}
                                    placeholder="Please Select Team2 Logo*"
                                />
                            </div>
                            <div className="form-group">
                            <label htmlFor="tournament-logo">Tournament Logo</label>

                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile3}
                                    placeholder="Please Select Tournament Logo*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="url"
                                    name=""
                                    id=""
                                    value={videoLink} 
                                    onChange={(e)=>{setVideoLink(e.target.value);}}
                                    placeholder="Enter Video Link *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="date"
                                    name=""
                                    id=""
                                    value={date} 
                                    onChange={(e)=>{setDate(e.target.value);}}
                                    placeholder="Enter Video Link *"
                                />
                            </div>
                        
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>Update Biggest Match</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </Fragment>
        </>
    );
}
export default DisplayForm;