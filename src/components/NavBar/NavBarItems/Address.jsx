import React from 'react';
import styled from 'styled-components';

const AddressLabel = styled.h1`
    color: rgb(142,143,143);
    font-size: 15px;
    display: inline-block;
`;
const Wrapper = styled.div`
    display: inline-block;
    padding-right: 10px;
`;
const PinDropIcon = styled.span`
    font-size: 30px;
    vertical-align: middle;
    padding-bottom: 20px;
    display: inline-block;
`;
function Address(props){
    return (<Wrapper>
        <PinDropIcon>📍</PinDropIcon>
        {props.loggedIn? <AddressLabel> Delivering to {props.name} <br/> {props.address}</AddressLabel> : <AddressLabel> Hello, <br/> Select your address</AddressLabel>}
    </Wrapper>)
}
export default Address;