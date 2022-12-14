import { Component } from "react";

class Rating extends Component {
    render() { 
        return (
            <ul className="rating-star d-flex flex-wrap justify-content-center align-items-center">
                <li><i className="icofont-star"></i></li>
                <li><i className="icofont-star"></i></li>
                <li><i className="icofont-star"></i></li>
                <li><i className="icofont-star"></i></li>
                <li><i className="icofont-star"></i></li>
            </ul>
        );
    }
}
 
export default Rating;