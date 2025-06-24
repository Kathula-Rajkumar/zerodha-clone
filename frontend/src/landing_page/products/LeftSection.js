import React from 'react';


function LeftSection({imageUrl , productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                          <a href={tryDemo}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          <a href={learnMore} style={{marginLeft:"50px"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br/>
                    </div>
                    <div className='mt-3'>
                         <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                         <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}></img></a> 
                    </div>
                   
                   

                </div>
            </div>
         </div>
     );
}

export default LeftSection;
