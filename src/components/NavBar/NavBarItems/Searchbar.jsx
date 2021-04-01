import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: inline-block;
    
`;

const InputBar = styled("input")`
    width: 40vw;
    position: center;
    display: inline-block;
    height: 40px;
    border-radius: 10px;
    margin:10px;
    padding-left:15px;
`;
const SearchButton = styled.button`
   
    border-radius: 5px;
    font-size: 20px;
    background-color:#f0c14b;
    border-color:#a88734 #9c7e31 #846a29; 

`;

class Searchbar extends Component{
 state = {
     userInput: ""
 }
searchHandler = (e) =>
{
    e.preventDefault();
    alert(`You have searched for ${this.state.userInput}\n but this has not been implemented yet...`)
}
handleChange = (e)=>{
    // I don't think this is optimal
    this.setState({userInput: e.target.value})
}
render(){
    return (
        <wrapper>
            <InputBar  onChange={this.handleChange}placeholder="Search for product"/>
            
            <SearchButton value = {this.state.userInput} onClick={this.searchHandler}>🔍</SearchButton>
           
        </wrapper>)
}
    
}
export default Searchbar;