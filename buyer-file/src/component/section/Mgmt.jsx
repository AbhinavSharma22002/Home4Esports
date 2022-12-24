import { Fragment, useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import Header from '../layout/header'
import Footer from '../layout/footer';
import PageHeader from "../layout/pageheader";
import SocialMedia from "./socialmedia";


const Mgmt = ()=>{
    const title = "Merchandise Form";

    const [productTitle,setPoductTitle] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [productSize,setProductSize] = useState('');
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
            productTitle,productPrice,productSize,image
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
                `http://localhost:3001/api/products/create`,
                requestOptions
        );
        if(response.status===200){
            alert("Success");
            navigate("/");
        }
    }

    return (
        <>
        <Fragment>
            <Header />
            <PageHeader title={'MERCHANDISE PAGE '} curPage={'merchandise form'} />
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
                                    value={productTitle} 
                                    onChange={(e)=>{setPoductTitle(e.target.value);}}
                                    placeholder="Enter Product Title*"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    value={productPrice} 
                                    onChange={(e)=>{setProductPrice(e.target.value);}}
                                    placeholder="Enter Product Price *"
                                />
                            </div>
                            <div className="form-group">
                                <select name=""
                                    id=""
                                    value={productSize}
                                    onChange={(e)=>{setProductSize(e.target.value);}}
                                    >
                                         <option>-Select Size-</option>
                                     <option value="small">S</option>
                                    <option value="medium">M</option>
                                     <option value="long">L</option>
                                    <option value="extra">XL</option>
                            </select>
                                
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
                                <button className="d-block default-button" onClick = {handleUpload}><span>Upload Merchandise</span></button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
        </>
    );
}
/*class Mgmt extends Component {

    constructor(props){
        super(props);
        this.state = {
            regFName: '',
            regLName: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
        };
    }
    render() { 

    }
}
    */

 
export default Mgmt;