import { Component } from "react";

const title = "Search Your keywords";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        };
    }
    render() { 
        return (
            <div className="widget widget-search">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <form action="/" className="search-wrapper">
                    <input
                        type="text"
                        name="s"
                        id="item01"
                        value={this.state.search}
                        onChange={(e)=>{this.setState({search: e.target.value});}}
                        placeholder="Search Here..."
                    />
                    <button type="submit"><i className="icofont-search-2"></i></button>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;