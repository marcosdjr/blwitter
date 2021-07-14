import React from 'react'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col } from 'react-bootstrap';


export default function IconBar() {
    return ( 
        <Col className="homepage-icon-col">
            <div>
                <img
                    src="/images/twitter.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/homeicon.png"
                    className='smallicon'
                    alt='twitter-icon__home'
                />
            </div>
            <div>
                <img
                    src="/images/glassicon.png"
                    className='smallicon'
                    alt='twitter-icon__glass'
                />
            </div>
            <div>
                <img
                    src="/images/bellicon.png"
                    className='smallicon'
                    alt='twitter-icon_bell'
                />
            </div>
            <div>
                <img
                    src="/images/mailicon.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/bookmark.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/list.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/profile.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/more.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div>
                <img
                    src="/images/tweet.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
            <div className="homepage-icon-col-accounts">
                <img
                    src="/images/accounts.png"
                    className='smallicon'
                    alt='twitter-icon'
                />
            </div>
        </Col>



    )
}