import { Component } from "react";

const title = "Our Archive";

let ArchiveList = [
    {
        month: 'January',
        year: '2022',
    },
    {
        month: 'February',
        year: '2022',
    },
    {
        month: 'March',
        year: '2022',
    },
    {
        month: 'August',
        year: '2022',
    },
    {
        month: 'September',
        year: '2022',
    },
    {
        month: 'December',
        year: '2022',
    },
]

class Archive extends Component {
    render() { 
        return (
            <div className="widget widget-archive">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper list-bg-none">
                    {ArchiveList.map((val, i) => (
                        <li key={i}>
                            <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-ui-calendar"></i>{val.month}</span><span>{val.year}</span></a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Archive;