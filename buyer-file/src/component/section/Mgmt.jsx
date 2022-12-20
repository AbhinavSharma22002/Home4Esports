import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import PageHeader from "../layout/pageheader";
import SocialMedia from "./socialmedia";

const title = "Merchandise Form";

class Mgmt extends Component {

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
        return (
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
                                        name="productTitle"
                                        id="item01"
                                        value={this.state.productTitle}
                                        onChange={(e)=>{this.setState({productName: e.target.value});}}
                                        placeholder="Enter Product Title*"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="productPrice"
                                        id="item02"
                                        value={this.state.productPrice}
                                        onChange={(e)=>{this.setState({productPrice: e.target.value});}}
                                        placeholder="Enter Product Price *"
                                    />
                                </div>
                                <div className="form-group">
                                    <select name="productSize"
                                        id="item03"
                                        value={this.state.productSize}
                                        onChange={(e)=>{this.setState({productSize: e.target.value});}}
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
                                        name="uploadProduct"
                                        id="item04"
                                        value={this.state.uploadProduct}
                                        onChange={(e)=>{this.setState({uploadProduct: e.target.value});}}
                                        placeholder="Please Select Products *"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                    name="description"
                                    id="item05"
                                    value={this.state.productDescrition}
                                    onChange={(e)=>{this.setState({productDescrition: e.target.value});}}
                                    placeholder="Enter Product Description here*"
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="d-block default-button"><span>Submit</span></button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default Mgmt;