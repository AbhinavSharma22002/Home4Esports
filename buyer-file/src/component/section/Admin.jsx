import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer';
import '../../assets/css/Admin.css'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import { Fragment } from 'react';
const Admin = () => {
    return (
        <Fragment >
        <div>
           
            <Header />
            <div className='container-1'>
                <div className='head-1'>
                    <Link to="/Schedule">
                        <img src={Newgame} alt="logo" />
                    </Link>
                </div>

                <div className='head-1'>
                    <Link to="/Mgmt">
                        <img src={Newmerch} alt="logo" />
                    </Link>
                </div>
        
           
            </div>
            
        </div>
        <Footer />
        </Fragment>
    )
}

export default Admin;
