import React from 'react';
import styled from 'styled-components';
import cart from '../../../assets/cart.png'
function Cart(){
    const wrapper = styled.div`
        display: inline-block;
    `
    const label = styled.p`
        color: white;
    `
    const icon = styled.img`
    height: 50px;
    `

    return (<wrapper>
        <icon src={cart}></icon>
        <label>asdf</label>
    </wrapper>)
}
export default Cart;