import React, { Fragment } from 'react'
import Newgame from '../../assets/images/banner/Newgame.png'
import Newmerch from '../../assets/images/banner/Newmerch.png'
import Header from '../layout/header'
import Footer from '../layout/footer';
const blog01 = () => {
    return (
        <Fragment>
            <div>
            <Header />
                <div className='form'>
                    <form style={{ position: "absolute", top: "25%", left: "35%" ,marginBottom:"50px"}}>
                        <h2 style={{ textAlign: "center" }}>Blog page</h2>
                        <img src="" alt="" />
                        <textarea name="" id="" cols="3" rows="1" placeholder=' Blog Title'></textarea>
                        <textarea name="" id="" cols="30" rows="15" placeholder='About Blog'></textarea>
                        <button type='submit' style={{}}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default blog01
