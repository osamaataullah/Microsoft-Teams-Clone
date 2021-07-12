<h1 id="top" align="center"> <img src="screenshots/WeTalk_logo.png"  width="25" height="25"> We Talk Video Chat </h1>
<img src="screenshots/Group_video.gif" alt="gif" align="right" width="300" height="300"> 
 <h3 align="left"> Free video chatting from anywhere, anytime!<br>  </h3> 
<div align="left"> WeTalk is a video chatting web application developed for <b> Microsoft Engage 2021 </b> program. 
 </br>
</br> <b> Agile SCRUM methodology was used for this project. </b> </br> It was built in 4 sprints, each sprint consisting of design, build , test & review phases.
</br> <a href="https://github.com/AJgthb2002/WeTalk/blob/4f7422b6537b01926390cbb1611b7238d82c919c/documentation/Microsoft%20Engage%202021%20challenge-%20Agile%20Methodology.pdf"> How I used Agile SCRUM for this project </a>
</div> 
</br>
<div align="left"> This project is Deployed at: https://wetalk01.herokuapp.com/
</br>
<!-- <a href="" >Demo video </a></div> -->

***
### Screenshots
1. **Home Page** 

![alt text](https://github.com/AJgthb2002/WeTalk/blob/4f7422b6537b01926390cbb1611b7238d82c919c/screenshots/Home_screen_3.png)  

2. **Meeting Room Screen**

![alt text](https://github.com/AJgthb2002/WeTalk/blob/4f7422b6537b01926390cbb1611b7238d82c919c/screenshots/Meet_screen2.png)  
***
## Functional Features:
:white_check_mark: **Mandatory Feature**: Minimum 2 participants should be able to connect and have a video conversation.

**Extra Features implemented**:
1. Turn Video off 
2. Mute Audio 🎙️
3. More the merrier! Have a **Group Meeting** with upto 6 participants 👨‍👩‍👦‍👦
4. Present your screen activity in real-time by **Screen Sharing**! 🖥️ </br>(**Multiple participants can share their screens simultaneously!**)
5. Group Chatting (within the meeting) 🗨️
6. Set **Custom Meeting title/ room name** and share with other participants to invite them to the meeting. </br>It is displayed on top-left side of meeting room.
7. No video? No problem! Usernames of participants are displayed on their video window when video is turned off.
8. Current **member count** is displayed on the top bar. 
9. **Current time** is displayed at the top-right side. 🕙
10. **Full Screen mode**- View Video Stream or Presentation of a participant in full screen mode by clicking on the video window.
11. **Leave Meeting**- returns user back to the homepage 🔙
12. **Responsive Design**: Users can join meeting from any device. 📱 💻

***
![](https://github.com/AJgthb2002/WeTalk/blob/4f7422b6537b01926390cbb1611b7238d82c919c/screenshots/webapp_flow.png)
***
### Tech Stack:
| Name | Version | Description
| ------ | ------ | ------ |
| Node JS | 14.15.3 | Node.js is an open source development platform for executing JavaScript code server-side. It is useful for developing applications that require a persistent connection from the browser to the server and is suitable for real-time applications. Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously.  |
| Socket.io | 4.1.2 | Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Whenever an event occurs, the server will get it and push it to the concerned connected clients. |
| Express | 4.17.1 | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation. Express is used to build the web server that Socket.IO will work with. ExpressJS makes it easy to define routes and other things. |
| Simple-Peer | 9.7.2 | It is a concise, node.js style API for WebRTC. It allows peer to peer connection and supports video/voice streams. |
| React JS | 17.0.2 | ReactJS is JavaScript library used for building user interfaces or reusable UI components. It can be used on client and server side as well as with other frameworks. However, this front-end library is responsible only for the application’s view layer. React uses VDOM, which makes the web applications run much faster than those developed with alternate front-end frameworks.|
| Bootstrap | 4.3.1 | Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website. It includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. It enables us to build responsive designs quickly and maintains wide browser compatibility. |
| Styled Components | 5.1.1 | Styled-components library allows us to write actual CSS in JavaScript code. It keeps track of which components are rendered on a page and injects their styles automatically. When we define our styles, we actually create a normal React component, that has our styles attached to it.|
| Nodemon | 2.0.4 | Nodemon is a tool from npm. This tool restarts our server as soon as we make a change in any of our files, otherwise we need to restart the server manually after each file modification. |

**This is how socket.io works:** </br>
On the server-side, Socket.IO works by adding event listeners to an instance of http.Server. The HTTP server will begin to serve the client library at /socket.io/socket.io.js. The global socket variable is an EventEmitter-like object. Since both the server and client's Socket object act as EventEmitters, you can emit and listen for events in a bi-directional manner. We can send any JSON serialisable object to and from the server. This includes strings, numbers, arrays and booleans. </br>

<img src="https://github.com/AJgthb2002/WeTalk/blob/4f7422b6537b01926390cbb1611b7238d82c919c/screenshots/socketio_working_1.png" alt="socketio_working" width="500" height="300"/>
 
***
### Future Enhancements :dart::
Features to be implemented:
- Keeping chat window active before and after the video meeting
- Display a list of all participants
- Meet Recording
- Adding a whiteboard
- Raise Hand Feature
- Adding emoticons in chat messages
- Automatic text wrapping in chat messages
***
**Additional Sources:**

🏠 **Home Page Template**: https://templatemo.com/tm-535-softy-pinko  </br>
🖌️ **Open Source Vector Images**: https://undraw.co/ , https://www.freepik.com/</br>
⭐ **Icons**: https://fontawesome.com/v5.15/icons?d=gallery&p=2

***
**Local Setup:**

- Clone this repo to your local machine using `https://github.com/AJgthb2002/WeTalk.git`

- Move to client folder, install the required packages
<pre>
  <code>
    npm install
    npm start
  </code>
</pre>

- Move to server folder, install the required packages
<pre>
  <code>
    npm install
    npm run dev
  </code>
</pre>

- Open your local host port 3000 from your browser

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

 
