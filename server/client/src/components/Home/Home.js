//imports
import React, { useRef, useState, useEffect } from 'react';
import socket from '../../socket';

//------------------------------------------------------------------------------------------

const Home = (props) => {
    const roomRef = useRef();
    const userRef = useRef();
    const [err, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {

        socket.on('duplicate-user', ({ error }) => {
            if (!error) {
                // save the username and meeting title entered by user
                const roomName = roomRef.current.value
                const userName = userRef.current.value
                sessionStorage.setItem('user', userName);
                props.history.push(`/room/${roomName}`);
            } else {
                setErr(error);
                setErrMsg('User name already exists');
            }
        });
    }, [props.history]);

    // when join meet button is pressed
    function clickJoin() {
        // save the username and meeting title entered by user
        const roomName = roomRef.current.value;
        const userName = userRef.current.value;


        // if username or title is missing, display an error message
        if (!roomName || !userName) {
            setErr(true);
            setErrMsg('Enter both Username and Meeting Title');
            alert('Enter both Username and Meeting Title');
        }
        else {
            socket.emit('check-user', { roomId: roomName, userName });
            sessionStorage.setItem('user', userName);
            props.history.push(`/room/${roomName}`);
        }
    }
    return (
        <>
            {/* navbar starts */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* main logo */}
                                <div className="logo">
                                    <img src="images\logo_no_bg.png"></img>
                                </div>
                                {/* title of webapp */}
                                <div className="logo">
                                    Microsoft Teams
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* navbar ends */}

            {/* welcome area starts */}
            <div className="welcome-area" id="welcome">
                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                <h1 style={{ color: "black" }}><strong>Microsoft Teams Clone</strong><br /> </h1>
                                <h4 style={{ color: "black" }}>Welcome to Microsoft Teams. <br />Collaborate with your coworkers or coordinate with your social groups in one app. </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* welcome area ends */}

            {/* Join meeting box starts */}
            <section className="section home-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                    <div className="features-small-item">
                                        <br />
                                        {/* username input */}
                                        <div className="form-floating mb-3">
                                            <label for="floatingInput"><b>Username</b></label>
                                            <input type="text" className="form-control" id="userName" ref={userRef} placeholder="Please Enter User Name" />
                                        </div>

                                        {/* Meeting title input */}
                                        <div className="form-floating">
                                            <label for="floatingPassword"><b>Meeting Title</b></label>
                                            <input type="text" className="form-control" id="roomName" ref={roomRef} placeholder="Please Enter Meeting Title" />
                                        </div>

                                        <br />
                                        {/* join meet button */}
                                        <button className="btn-md myButton" onClick={clickJoin}>Join Meet</button>
                                        <br />
                                        <br />
                                        {/* if username or title is missing, error is displayed */}
                                        {err ? <p style={{ color: "red" }}>{errMsg}</p> : null}

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* join meeting box ends */}
        </>

    );

};
export default Home;
