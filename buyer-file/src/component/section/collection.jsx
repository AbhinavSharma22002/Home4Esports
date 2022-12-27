import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";


const subtitle = "today's";
const title = "Our Features";


let CollectionListContent = [
    {
        imgUrl: 'assets/images/game/01.png',
        imgAlt: 'collect thumb',
        title: 'Studio',
        link:'google.com'
    },
    {
        imgUrl: 'assets/images/game/02.png',
        imgAlt: 'collect thumb',
        title: 'Khelshaala',
        link:'google.com'
    },
    {
        imgUrl: 'assets/images/game/03.png',
        imgAlt: 'collect thumb',
        title: 'Crowd Forge',
        link:'google.com'
    },
    {
        imgUrl: 'assets/images/game/04.png',
        imgAlt: 'collect thumb',
        title: 'Metabits',
        link:'google.com'
    },
]


class CollectionSection extends Component {
    render() { 
        return (
            <section className="collection-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center CollectionStyle">
                            {CollectionListContent.map((val, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="game-item item-layer">
                                        <div className="game-item-inner">
                                            <div className="game-thumb">
                                                <img 
                                                    src={`${val.imgUrl}`} 
                                                    alt={`${val.imgAlt}`} 
                                                />
                                            </div>
                                            <div className="game-overlay">
                                                <h4><a href={val.link}>{val.title}</a> </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CollectionSection;