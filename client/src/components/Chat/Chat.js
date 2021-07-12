//imports
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import socket from '../../socket';
//------------------------------------------------------------------------------

const Chat = ({ display, roomId }) => {
  const currentUser = sessionStorage.getItem('user');
  const [msg, setMsg] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef();

  // when a new message is received
  useEffect(() => {
    socket.on('message-received', ({ msg, sender }) => {
      setMsg((msgs) => [...msgs, { sender, msg }]);
    });
  }, []);


  useEffect(() => { scrollToBottom() }, [msg])

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  // when a message is sent
  const sendMessage = (e) => {
    if (e.key === 'Enter') {
      const msg = e.target.value;

      if (msg) {
        socket.emit('message-sent', { roomId, msg, sender: currentUser });
        inputRef.current.value = '';
      }
    }
  };

  return (
    // Display chat window only when the chat button is clicked
    <ChatContainer className={display ? '' : 'width0'}>

      <Titlebox>Chat Room</Titlebox>

      <ChatWindow>
        {/* Section where all the sent messages are displayed */}
        <MessageList>
          {msg &&
            msg.map(({ sender, msg }, idx) => {
              if (sender !== currentUser) {
                return (
                  <Message key={idx}>
                    <strong>{sender}</strong>
                    <p>{msg}</p>
                  </Message>
                );
              } else {
                return (
                  <UserMessage key={idx}>
                    <strong>{sender}</strong>
                    <p>{msg}</p>
                  </UserMessage>
                );
              }
            })}

          <div style={{ float: 'left', clear: 'both' }} ref={messagesEndRef} />
        </MessageList>

      </ChatWindow>

      {/* input box where message can be typed */}
      <InputArea
        ref={inputRef}
        onKeyUp={sendMessage}
        placeholder="Enter your message"
      />

    </ChatContainer>
  );
};

// -------------------------------------------------------------------------
// Styled Components:

const ChatContainer = styled.div`
  background-color: #d1d1f5;
  display: flex;
  flex-direction: column;
  width: 30%;
  hieght: 100%;
  transition: all 0.5s ease;
  overflow: hidden;
`;

const ChatWindow = styled.div`
  width: 100%;
  height: 83%;
  max-height: 83%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Titlebox = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  color: black;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 15px;
  text-align: left;

  > strong {
    margin-left: 3px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    box-shadow: 0px 0px 3px #6264a7;
    font-size: 14px;
  }
`;

const MessageList = styled.div`
  display: flex;
  width: 100%;
  color: #454552;
  flex-direction: column;
  padding: 15px;
`;

const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  font-size: 16px;
  margin-top: 15px;
  text-align: right;

  > strong {
    margin-right: 35px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    margin-right: 30px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    background-color: #6264a7;
    color: white;
    font-size: 14px;
    text-align: left;
  }
`;

const InputArea = styled.input`
  bottom: 0;
  width: 100%;
  height: 8%;
  padding: 15px;
  border-top: 1px solid rgb(69, 69, 82, 0.25);
  box-sizing: border-box;
  opacity: 0.7;

  :focus {
    outline: none;
  }
`;

export default Chat;
