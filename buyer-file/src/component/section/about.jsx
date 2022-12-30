import { Component } from "react";


const subtitle = "who we are";
const title = "we are professional team esport";
const desc = "We started with three gamers in a white-collar corporate, grinding for hours after work, in a car-turned-arena, to only realize that it wasn’t enough. Arenas expanded to rented B&B calling out more gamers. It still wasn’t enough. Something was missing. It was structure. ";


let AboutListContent = [
    {
        imgUrl: 'assets/images/about/icon-1.png',
        imgAlt: 'About Icon',
        title: 'About Ourselves',
        desc: 'One of them decided to get intentional about structure in esports. His passion for esports and belief that esports could be a structured ecosystem for gamers, crew and fans led to the set up of CCE in 2020.',
    },
    {
        imgUrl: 'assets/images/about/icon-2.png',
        imgAlt: 'About Icon',
        title: '15K+ Registered Players',
        desc: 'We have arranged multiple tournaments and with more than 15K+ playesrs. We are in the top 5 upcoming esports startups in the country.',
    },
    {
        imgUrl: 'assets/images/about/icon-3.png',
        imgAlt: 'About Icon',
        title: '1000+ Streams Complete',
        desc: 'We completes 1000+ streams in the last year and willing to do more in next years.',
    },
]



class AboutSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <p>{subtitle}</p>
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutListContent.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`}
                                                        />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSection;