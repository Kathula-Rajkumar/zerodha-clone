import React from 'react';
import { Link } from 'react-router-dom';


function Universe({imageUrl}) {
    return ( 
        <div className='container mt-5 '>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
          
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/smallcaseLogo.png'></img>
                <p className='text-small text-muted'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/streakLogo.png' style={{ width: '100px', height: '60px' }}></img>
                <p className='text-small text-muted'>Algo & strategy platform .</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/sensibullLogo.svg' style={{ width: '100px', height: 'auto' }}></img>
                <p className='text-small text-muted'>Options trading platform.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/zerodhaFundhouse.png' style={{ width: '200px', height: 'auto' }}></img>
                <p className='text-small text-muted'>Asset management.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src='media/images/goldenpiLogo.png'></img>
                <p className='text-small text-muted'>Bonds trading platform.</p>
            </div>
            <div className='col-4 p-3 mt-5'>
            <img src="media/images/dittoLogo.png" style={{ width: '100px', height: 'auto' }} /><br/>
            <p className='text-small text-muted'>Personalized advice on life and health insurance.</p>

            </div>
            <Link to={"/signup"} className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{ width: "20%", margin: "0 auto", backgroundColor: "#0d6efd;" }}>
                    Sign up for free
            </Link>
        </div>
    </div>
    );
}

export default Universe;
