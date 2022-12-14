import { Component } from "react";

const title = "Our Popular tags";

let TagsList = [
    {
        Name: 'envato',
        SiteLink: '#',
    },
    {
        Name: 'themeforest',
        SiteLink: '#',
    },
    {
        Name: 'codecanyon',
        SiteLink: '#',
    },
    {
        Name: 'videohive',
        SiteLink: '#',
    },
    {
        Name: 'audiojungle',
        SiteLink: '#',
    },
    {
        Name: '3docean',
        SiteLink: '#',
    },
    {
        Name: 'envato',
        SiteLink: '#',
    },
    {
        Name: 'themeforest',
        SiteLink: '#',
    },
    {
        Name: 'codecanyon',
        SiteLink: '#',
    },
]

class Tags extends Component {
    render() { 
        return (
            <div className="widget widget-tags">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="lab-ul widget-wrapper">
                    {TagsList.map((val, i) => (
                        <li key={i}><a href={`${val.SiteLink}`}>{val.Name}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}
 
export default Tags;