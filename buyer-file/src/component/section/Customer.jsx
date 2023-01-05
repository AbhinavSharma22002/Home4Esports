
import { Fragment,useEffect,useState } from "react";
import PageHeader from "../layout/pageheader";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const MyCustomer = (props)=>{
    const [myTournaments,setMyTournamentsList] = useState([]);
    const [isOpen,setIsOpen] = useState(false);
    const [currId,setCurrId] = useState('');

    const [type,setType] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

const openModal = (msg,e)=>{
        e.preventDefault();
        setCurrId(msg);
        let requestOptions = {
                method: "POST",
                headers: { 'Content-Type': 'application/json',
                    "auth-token":localStorage.getItem('token')
                    },
                body: JSON.stringify({id: msg})
        };
            fetch(
                `http://localhost:3001/api/user/getById`,
                requestOptions
            ).then((res) => res.json())
            .then((json) => {
                json = json.user;
                setType(json.role);
                setName(json.fname);
                setEmail(json.email);
            })
    setIsOpen(true);
}
const closeModal = ()=>{
    setIsOpen(false);
    setCurrId('');
                setType('');
                setName('');
                setEmail('');
}
    useEffect(()=>{
        const value = async () => {
            const requestOptions = {
                method: "POST",
                headers: {
                    "auth-token":localStorage.getItem('token')
                    }
            };
            const response = await fetch(
                `http://localhost:3001/api/user/getAll`,
                requestOptions
            );
            const data = await response.json();
            if (response.status === 200) {
                setMyTournamentsList(data.users);
            }
            else {
                props.showAlert("Something went wrong!!","danger");
            }
		}
		value();
    },[]);

    const handleUpload = async (e)=>{
        e.preventDefault();
        const data = {
        id:currId,
        type:[
            "fname","email","role"
        ],
        body: [
            name,email,type
        ]
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
                `http://localhost:3001/api/user/getByIdAndUpdate`,
                requestOptions
        );
        if(response.status===200){
            props.showAlert("User Update Success!!","success");
            window.location.reload(true);
        }
    }   

    return (
        <>
        <Fragment>
                <PageHeader title={'MY USERS'} curPage={'MyUSER'} />
                <div className="achievement-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="achievement-area">
                                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                                    <li className="nav-item mx-5" role="presentation">
                                     Index
                                    </li>
                                    <li className="nav-item " role="presentation">
                                     Name
                                    </li>
                                    <li className="nav-item mx-5" role="presentation">
                                     Email
                                    </li>
                                    <li className="nav-item" role="presentation">
                                     Role
                                    </li>
                                    <li className="nav-item mx-5" role="presentation">
                                     Edit
                                    </li>
                                </ul>
                                {
                                    myTournaments.length!==0?(
                                        <>
                                    <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {myTournaments.map((val, i) => (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td><b>{val.name}</b></td>
                                                        <td>{val.email}</td>
                                                        <td>{val.role}</td>
                                                        <td className="open-modal" onClick={(event)=> openModal(val._id,event)} style={{cursor: "Pointer"}}><u>Edit</u></td>
                                                        </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                        </>
                                    ):(
                                        <>
                                        <h3>Nothing available</h3>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={isOpen} onHide={closeModal} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   <p style={{color: 'black'}}>Edit Tournament</p>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div style={{color: 'black'}}>
                <form className="account-form">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={name} 
                                    onChange={(e)=>{setName(e.target.value);}}
                                    placeholder="Enter Name*"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={email} 
                                    onChange={(e)=>{setEmail(e.target.value);}}
                                    placeholder="Enter Email*"
                                />
                                <select name=""
                                    id=""
                                    value={type}
                                    onChange={(e)=>{setType(e.target.value);}}
                                    >
                                    <option>-Select Type-</option>
                                     <option value="superadmin">superadmin</option>
                                    <option value="admin">admin</option>
                                     <option value="local">local</option>
                            </select>
                        </form>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleUpload}>Update</Button>
                <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
                </Modal>
            </Fragment>
        </>
    );

};
export default MyCustomer;