import React from 'react';

function LandingPage(){
    return(
        <div className="single-height-pages">
<<<<<<< HEAD
            <div className="row" style={{flexWrap:'nowrap', alignItems:'center'}}>
                <div>
                    <img src={car} alt={"Undraw.co Car Illustration"} width={"700px"}/>
                </div>
                <div className="column" style={{marginLeft:'48px'}}>
                    <h1 className="super-heading" style={{textAlign:'right', lineHeight:'110px'}}>PARKING ON US!</h1>
                    <h6 className="body landing"> A web app to solve the issue of finding parking spots for students and faculty. Sign up
                        and answer few questions and forget about all the hassle in finding a spot on University at Buffalo,
                        North Campus.
                    </h6>
                    <Link to="/sign-up" className="register">BECOME A MEMBER</Link>
                </div>
=======
            <div>
                <a href={"/edit-time"}> EDIT TIME </a>
>>>>>>> parent of 231eca2 (Issue #25 - Landing Page)
            </div>
        </div>
    )
}

export default LandingPage;
