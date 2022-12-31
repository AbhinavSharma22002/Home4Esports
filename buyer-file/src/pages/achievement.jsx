import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


let TabOneContentList = [
    {
        imgUrlOne: 'assets/images/logo/logo.png',
        imgAltOne: 'achivement thumb',
        date: 'October - 2021',
        title: 'Selected in STPI Image COE',
    },
    {
        imgUrlOne: 'assets/images/logo/logo.png',
        imgAltOne: 'achivement thumb',
        date: 'October - 2021',
        title: 'Selected in CONQUEST',
    },
    {
        imgUrlOne: 'assets/images/logo/logo.png',
        imgAltOne: 'achivement thumb',
        date: 'August - 2022',
        title: 'Selected in ISB MFAbulous',
    },
    {
        imgUrlOne: 'assets/images/logo/logo.png',
        imgAltOne: 'achivement thumb',
        date: 'October - 2022',
        title: 'Inc42 India Top 30 Start Ups 2022',
    },
]



class AchievementPage extends Component {
    render() { 
        return (
            <Fragment>
                <PageHeader title={'OUR ACHIEVEMENTS'} curPage={'ACHIEVEMENT'} />
                <div className="achievement-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="achievement-area">
                                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation" title="Pubg Lite">
                                        <button className="nav-link active" id="tabOne-tab" data-bs-toggle="tab" data-bs-target="#tabOne" type="button" role="tab" aria-controls="tabOne" aria-selected="false"><img src="assets/images/logo/logo.png" alt="achievement" /></button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabOneContentList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrlOne}`} alt={`${val.imgAltOne}`} width="60" /></td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.title}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default AchievementPage 