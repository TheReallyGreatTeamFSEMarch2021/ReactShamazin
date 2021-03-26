import React from 'react';
import styled from 'styled-components';

function Searchbar(){
    const wrapper = styled.div`
        display: inline-block;
    `
    const label = styled.p`
        color: white;
    `
    const inputBar = styled("input")`
        width: 500px;
    `

    return (<wrapper>
        <input placeholder="Search for product"/><button>🔍</button>
    </wrapper>)
}
export default Searchbar;