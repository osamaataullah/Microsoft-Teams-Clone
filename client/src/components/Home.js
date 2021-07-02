import React, {useRef, useState, useEffect} from 'react';
import socket from '../socket';

const Home=(props) => {
    const roomRef = useRef();
    const userRef = useRef();
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    
    useEffect(() => {

        socket.on('FE-error-user-exist', ({ error }) => {
          if (!error) {
            const roomName = roomRef.current.value;
            const userName = userRef.current.value;
    
            sessionStorage.setItem('user', userName);
            props.history.push(`/room/${roomName}`);
          } else {
            setErr(error);
            setErrMsg('User name already exists');
          }
        });
      }, [props.history]);

    function clickJoin() {
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;
        
    
        if (!roomName || !userName) {
          setErr(true);
          setErrMsg('Enter both Username and Meeting Title');
        } 
        else {
        socket.emit('BE-check-user', { roomId: roomName, userName });
        sessionStorage.setItem('user', userName);
        props.history.push(`/room/${roomName}`);
        }
      }
    

   
	    return (
		<>
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        
                        <a href="#" className="logo">
                            WeTalk Video chat
                        </a>
                        
                        <ul className="nav">
                            <li><a href="#welcome" className="active">Home</a></li>
                            <li><a href="#work-process">Features</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>
    
    <div className="welcome-area" id="welcome">

        
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1 style={{color:"white"}}>Introducing <strong>WeTalk</strong><br /> </h1>
                        <h4 style={{color:"white"}}>Instantly connect with your friends online. <br />NO sign ups, NO downloads!</h4>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    

    
    <section className="section home-feature">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                      
                        <div className="col-lg-6 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="features-small-item">
                                <h3> New Meeting</h3>
                                <br/>
                                <div >
                                    <img src="images\start_video_call.svg" alt="" height="100%" width="80%" />
                                </div>
                                <br />
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingInput"><b>Username</b></label>
                                <input type="text" className="form-control" id="userName" ref={userRef} placeholder="e.g. socialbutterfly" />
                                
                                </div>
                                <div className="form-floating">
                                <label htmlFor="floatingPassword"><b>Meeting Title</b></label>
                                <input type="text" className="form-control" id="roomName" ref={roomRef} placeholder="e.g. June Mentoring session" />
                                
                                </div>
                                <br />
                                <button className="btn-md myButton" onClick={clickJoin}>Start Meet</button>
                                <br />
                                <br />
                                {err ? <p style={{color:"red"}}>{errMsg}</p> : null}
                                
                            </div>
                                </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="features-small-item">
                            <h3> Join Meeting</h3>
                                <br/>
                                <div >
                                    <img src="\images\join_a_meeting.svg" alt="join meet" height="260rem" width="80%" />
                                </div>
                                <br />
                                <br />
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingInput"><b>Username</b></label>
                                <input type="text" className="form-control" id="floatingInput" placeholder="e.g. attendee20" />
                                
                                </div>
                                <div className="form-floating">
                                <label htmlFor="floatingPassword"><b>Meeting URL</b></label>
                                <input type="text" className="form-control" id="floatingPassword" placeholder="e.g. wetalk.meet.com/90adrk" />
                                
                                </div>
                                <br />
                                <button className="btn-md myButton">Join Meet</button>
                                <br />
                                <br />
                                <p>Enter a Softy Pinko meeting url to join a meeting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="mini" id="work-process">
        <div className="mini-content">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="info">
                            <h1>Features</h1>
                            <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Get Ideas</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Sketch Up</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Discuss</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Revise</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Approve</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" className="mini-box">
                            <i><img src="images\work-process-item-01.png" alt="" /></i>
                            <strong>Launch</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    
    <footer id="contact">
        <div className="container" >
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="copyright">Copyright &copy; 2021 Ananya Joshi</p>
                </div>
            </div>
        </div>
    </footer>
           </>
  
	     );
    
};
export default Home;