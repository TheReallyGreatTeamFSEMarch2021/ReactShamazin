import React from 'react';
import styled from 'styled-components';

function Language(){
    const wrapper = styled.div`
        display: inline-block;
    `
    const label = styled.p`
        color: white;
    `

    return (<wrapper>
        <label>This is the language selector</label>
    </wrapper>)
}
export default Language;