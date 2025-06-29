import React from 'react';


function RightSection ({productName, productDescription, learnMore, imageUrl}) {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mt-5 p-3' >{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                   
                </div>
                <div className='col-6'>
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;