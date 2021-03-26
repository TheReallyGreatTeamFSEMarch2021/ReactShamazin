import React from 'react';
import styled from 'styled-components';

const AddressLabel = styled.h1`
    color: rgb(142,143,143);
    font-size: 15px;
`;
const Wrapper = styled.div`
        display: inline-block;
`;
function Address(props){
    
    return (<Wrapper>
        <AddressLabel> 📍Delivering to {props.name} <br/> {props.address}</AddressLabel>
    </Wrapper>)
}
export default Address;