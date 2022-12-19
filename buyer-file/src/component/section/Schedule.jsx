import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import PageHeader from "../layout/pageheader";
import SocialMedia from "./socialmedia";

const title = "Result Form";

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            regFName: '',
            regSName: '',
            regDate: '',
            regGame: '',
            regConPassword: '',
        };
    }
    render() {
        return (
            <Fragment>
                <Header />
                <PageHeader title={'RESULT PAGE '} curPage={'result Form'} />
                <div className="login-section padding-top padding-bottom">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            <form className="account-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.regFName}
                                        onChange={(e) => { this.setState({ regFName: e.target.value }); }}
                                        placeholder="Team 1st name *"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        value={this.state.regFName}
                                        onChange={(e) => { this.setState({ regFName: e.target.value }); }}
                                        placeholder="Enter winning round*"
                                    />
                                </div>

                                <div className="form-group">
                                    <input

                                        type="text"
                                        name="name"
                                        id="item02"
                                        value={this.state.regSName}
                                        onChange={(e) => { this.setState({ regSName: e.target.value }); }}
                                        placeholder="Team 2nd name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        name="email"
                                        id="item03"
                                        value={this.state.regDate}
                                        onChange={(e) => { this.setState({ regDate: e.target.value }); }}

                                    />
                                </div>

                                <div className="form-group">
                                    <select name="game-choice"
                                        id="item03"
                                        value={this.state.regGame}
                                        onChange={(e) => { this.setState({ regGame: e.target.value }); }}
                                    >
                                        <option>-Select Game-</option>
                                        <option value="small">Valorant</option>
                                        <option value="medium">Dota</option>
                                        <option value="long">New state</option>
                                        <option value="extra">Pokemon unit</option>
                                    </select>
                                </div>

                                {/* <div className="form-group">
                                    <input
                                        type="file"
                                        name="uploadProduct"
                                        id="item04"
                                        value={this.state.uploadProduct}
                                        onChange={(e) => { this.setState({ uploadProduct: e.target.value }); }}
                                        placeholder="Please Select Products *"
                                    />
                                </div> */}
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

export default Schedule;