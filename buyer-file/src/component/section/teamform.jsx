import { Fragment, useState } from "react";
import {useNavigate  } from "react-router-dom";
import PageHeader from "../layout/pageheader";


const TeamForm = (props)=> {
    const title = "Create Your Team";

    const [teamName,setTeamName] = useState('');
    const[image,setImage] = useState('');
    const[invitationLink,setInvitationLink] = useState('');


    const navigate =useNavigate();
    function getID(){
        let pair = window.location.search.substring(1).split("=");
        return pair[1];
    }
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
    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
            teamName,image,tournamentId:getID()
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
                `http://localhost:3001/api/team/create`,
                requestOptions
        );
        const dataLink = await response.json();
        if(response.status===200){
            props.showAlert("Team Creation Success!!","success");
            setInvitationLink(dataLink.link);

        }
    }

    return (
        <>
        <Fragment>

            <PageHeader title={'TEAM CREATE '} curPage={'create tournament team '} />
            <div className="login-section padding-top padding-bottom">
                <div className=" container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
       
                        {invitationLink ===''? (
                            <>
                                             <form className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={teamName} 
                                    onChange={(e)=>{setTeamName(e.target.value);}}
                                    placeholder="Enter Your Team Name*"
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="file"
                                    name=""
                                    id="image"
                                    onChange={addFile}
                                    placeholder="Please Select Product Image*"
                                />
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button" onClick = {handleUpload}><span>CREATE TEAM</span></button>
                            </div>
                        </form>
                            </>
                        ):(
                            <>
                            <div>
                            <p>Invitation link:</p>
                            <input type="text" value={invitationLink} readOnly/>
                            <br />
                          </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
        </>
    );
}

export default TeamForm;