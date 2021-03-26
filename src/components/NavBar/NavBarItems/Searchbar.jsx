import React, {Component} from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    display: inline-block;
`;
const InputBar = styled("input")`
    width: 70%;
    position: center;
`;


class Searchbar extends Component{
 state = {
     userInput: ""
 }
searchHandler = (e)=>
{
    e.preventDefault();
    alert(`You have searched for ${this.state.userInput}\n but this has not been implemented yet...`)
}
handleChange = (e)=>{
// I don't think this is optimal
this.setState({userInput: e.target.value})
}
render(){
    return (<wrapper>
        <InputBar  onChange={this.handleChange}placeholder="Search for product"/><button value = {this.state.userInput} onClick={this.searchHandler}>🔍</button>
    </wrapper>)
}
    
}
export default Searchbar;