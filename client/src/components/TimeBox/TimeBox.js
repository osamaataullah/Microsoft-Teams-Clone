//imports
import  React, { useState , useEffect } from 'react';
import styled from 'styled-components';
//---------------------------------------------------------------------------

export const TimeBox = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <Timecontainer>
            <p> {date.toLocaleTimeString()}</p>
        </Timecontainer>
    )
};

//-------------------------------------------------------------------------------
// styled components:

const Timecontainer = styled.div`
  color: white;
`;

export default TimeBox;
