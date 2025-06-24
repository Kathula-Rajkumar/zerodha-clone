import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'> 
            <div className='row text-center'>

                <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
                    <h1 className="mt-5" style={{ cursor: "pointer" }}>
                        Open a Zerodha account
                    </h1>
                </Link>

                <p>Modern platforms and apps, 20 investments, and flat ₹20 intraday and F&O trades.</p>

                {/* Sign Up button also wrapped in Link */}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>
                        Sign up Now
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default OpenAccount;
