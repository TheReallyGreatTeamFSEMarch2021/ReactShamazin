import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
function Address(props){
    const wrapper = styled.div`
        display: inline-block;
    `
    const label = styled.p`
          color: white;

    `
    return (<wrapper>
        <label>Shipping/Delivering at: {props.address}</label>
    </wrapper>)
}
export default Address;