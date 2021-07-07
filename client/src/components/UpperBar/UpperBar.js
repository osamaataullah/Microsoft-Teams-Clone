
import React from 'react';
import styled from 'styled-components';
import TimeBox from '../TimeBox/TimeBox.js';

const UpperBar = ({
    MeetTitle,
    MemberCount
}) => {
    
    return(
        <Bar>
            <Center>
                <Title>
                    <div>{MeetTitle}</div>
                </Title>
            </Center>
            <Right>
                <div>Members: {MemberCount}</div>
            </Right>
            <TimeBox />

        </Bar>
    );
};



const Bar = styled.div`
  position: absolute;
  padding: 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  background-color: #6264a7;
`;
const Center = styled.div`
  flex:1;
  display: flex;
`;

const Title= styled.div`
  color: white;
`;
const Right = styled.div`
color:white;
margin-right: 20px;
`;

export default UpperBar;
