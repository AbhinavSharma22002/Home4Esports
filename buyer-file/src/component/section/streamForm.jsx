import { Component, Fragment } from "react";
import Footer from "../layout/footer";
import Header from "../layout/header";
import PageHeader from "../layout/pageheader";

const title = "Video Stream Form";

class streamForm extends Component {

    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Stream PAGE '} curPage={'Video Stream form'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="title"
                                        id="item01"
                                        value={this.state.title}
                                        onChange={(e)=>{this.setState({title: e.target.value});}}
                                        placeholder="Enter Video Title*"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="genre"
                                        id="item02"
                                        value={this.state.genre}
                                        onChange={(e)=>{this.setState({genre: e.target.value});}}
                                        placeholder="Enter Genre *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="file"
                                        name="image"
                                        id="item04"
                                        value={this.state.image}
                                        onChange={(e)=>{this.setState({image: e.target.value});}}
                                        placeholder="Please Select Image *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="url"
                                        name="link"
                                        id="item04"
                                        value={this.state.link}
                                        onChange={(e)=>{this.setState({link: e.target.value});}}
                                        placeholder="Please add URL *"
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
export default streamForm;