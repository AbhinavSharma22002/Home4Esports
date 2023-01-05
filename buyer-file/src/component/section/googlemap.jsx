import { Component } from "react";

class GoogleMap extends Component {
    render() { 
        return (
            <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8163.469912530294!2d76.95696291080495!3d28.39186468614079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d97f9a130ef%3A0xbb0cbaf36d00438c!2sSector%2082%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1672905339662!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} loading="lazy"></iframe>
            </div>
        );
    }
}
 
export default GoogleMap;