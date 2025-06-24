import React from 'react';


function Team() {
    return (  

         <div className='container'>
            <div className='row p-3 text-muted'
            style={{lineHeight:"1.8", fontSize:"1.2em"}}
            >
                <h1 className='text-center mt-5 '>People</h1>

                <div className='col-6 p-3 text-center'>
  <style>
    {`
      @keyframes tiltImage {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
      }

      .tilting-image {
        animation: tiltImage 2s ease-in-out infinite;
        border-radius: 100%;
        width: 50%;
      }
    `}
  </style>

  <img 
    src='media/images/Rajkumars.png' 
    className='tilting-image'
    alt='Rajkumar' 
  />

  <h4 className='text-center mt-4'>Rajkumar Kathula</h4>
  <h6>MERN Full Stack Developer</h6>
</div>



                <div className='col-6 p-3'>

                    <p>Built a full-stack clone of Zerodha, India’s leading stock trading platform, to enhance hands-on experience with real-world application architecture. The project replicates core functionalities like user authentication, dashboard UI, stock charts display, and basic order placement interface using the MERN stack.</p><br/>

                    <p>To strengthen full-stack development skills by cloning a real-world fintech application, focusing on frontend performance, secure backend handling, and UI/UX consistency.</p> <br/>

                    <p>Playing basketball is my zen</p><br/>
                    <p>
  Connect on{" "}
  <a
    href="https://www.linkedin.com/in/rajkumar-kathula-3922002b4/"
    style={{ textDecoration: 'none', marginRight: '10px' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
  /
  <a
    href="https://github.com/Kathula-Rajkumar"
    style={{ textDecoration: 'none', margin: '0 10px' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
  /
  <a
    href="https://leetcode.com/u/therajkumar/"
    style={{ textDecoration: 'none', marginLeft: '10px' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    LeetCode
  </a>
</p>      
                </div>
            </div>
         </div>
    );
}

export default Team;