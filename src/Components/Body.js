import React from 'react';
import logo from '../Image/img_avatar.jpg'; // with import


const Body=()=>{
    return(
    
        <div className="content">
                    <div className="card1">
                    <div className="ad">
                    <button>Try For Free Now! <div className="icon-sign"><i class="fa fa-chevron-right"></i></div></button>
                    
                    </div> 
                    <div className="text">
                    <h3> Set Your Business Up With Modern Payroll, Benefits, and HR.</h3>
                    </div> 
                    <div className="emailbox">
                    <div style={{display:'flex'}}>
                        <div className="rateicon"><i class="fa fa-at"></i></div>
                        <input type="text" placeholder="Your Email Address" >
                            
                        </input>
                    </div>
                        <button className="address">Get Started</button>
                    </div>
                    <div className="text2">
                        <h4>Our plans were to built to fit your unique needs.Streamline onboarding,benefits,payroll,PTO and mote with our simple, intuitive platform.</h4>
                    </div>
                    </div>
                
                
                    <div className="card2">
                        <div className="content-card-1">
                            <div className="head-content">
                                <div>Add New Employee</div>
                                <div><i class="fa fa-search"></i>Inbox</div>
                            </div>
                            <div className="head-content2">
                            <img src={logo} height="50" width="50"/>
                            <div style={{fontSize:"12px"}}>Jillian Wilde</div>
                            <div style={{fontSize:"8px" ,opacity:0.5}}>Full-Time    Los-Angeles</div>
                            </div>
                            
                            
                        
                        <div className="content-card-2">
                        
                            <div className="cont1 title">Job Details</div>
                            <div className="cont1 content1">Job Title</div>
                            <div className="cont1 content2">Departments</div>
                            <div className="cont1 content3">Work Location</div>
                            <div className="cont1 content4">Classification</div>
                            <div className="cont1 content5">Hire Date</div>
                            
                            <div className="cont col1">Class Instructor <i class="fa fa-check"></i></div>
                            <div className="cont col2">Fitness Training <i class="fa fa-check"></i></div>
                            <div className="cont col3">Los Angeles <i class="fa fa-check"></i></div>
                            <div className="cont col4">Independent Contaractor <i class="fa fa-check"></i></div>
                            <div className="cont col5">01/08/2020 <i class="fa fa-check"></i></div>
                            
                            </div>
                        
                        
                        <div className="content-card-3">
                            <img src={logo} height="70" width="70"/>
                            <div className="portfolio">
                            <div style={{fontSize: "12px"}}>John Williams</div>
                            <div  style={{fontSize: "8px"}}>UI Designers</div>
                            <div  style={{fontSize: "8px"}}>$45/hr</div>
                            </div>
                            <div className="cost">
                            <div style={{fontSize: "8px"}}>Total Pay</div>
                            <div><strong>$7558</strong></div>
                            <div className="paid">Paid <i class="fa fa-check"></i></div>

                            </div>
                        
                        </div>
                        </div>


                        <div className="content-card-4">
                        
                            <div className="message">Select the best medical plan for you.</div>
                            <div className="message1">
                            <div>Blue Cross PPO Direct 6k</div>
                            <div className="dot"><i class="fa fa-circle"></i></div>
                            </div>
                            <div className="costval">$644</div>
                        
                            
                        </div>

                    </div>

                    <div className="footer-content">
                    <div className="head">
                    <i class="fa fa-check"></i>
                        Free 14-day Demo
                    </div>
                    <div className="head">
                    <i class="fa fa-check"></i>
                       No Credit Card Needed
                    </div>
                    <div className="head">
                    <i class="fa fa-check"></i>
                       No Setup
                    </div>
        </div>
                
            
        
        </div>
        
        
    );
}

export default Body;