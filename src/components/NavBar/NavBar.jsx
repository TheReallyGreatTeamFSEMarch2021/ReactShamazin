import React, {Component} from 'react';
import navLogo from '../../assets/navLogo.png'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Address from './NavBarItems/Address';
import Searchbar from './NavBarItems/Searchbar';
import cart from '../../assets/cart.png'
// Need to find another place to have this at
const Nav = styled.div`
    width: 100vw ;
    background-color: rgb(19,25,33);
    display: inline-block;
    white-space: nowrap;
    margin: 0;
`
const Logo = styled.img`
    height: 50px;
`;
const CartNumber = styled.p`
    font-size: 1.5em;
    color: rgb(240,136,4);
    display: inline-block
`;
const CartLogo = styled.img`
    height: 25px;
`;
const AddressLabel = styled.h1`
    color: rgb(142,143,143);
    font-size: 15px;
    display: inline-block;
`;
const FlagIcon = styled.select`
    font-size:30px;
    margin-left: 10px;
    margin-right:10px;
    background-color: transparent;
    color: white;
`;
const BoldText = styled.select`
    font-size:30px;
    margin-left: 10px;
    margin-right:10px;
    background-color: transparent;
    color: white;
`;
class NavBar extends Component {
    state = {
        isUserAuth: false,
        address: "Nashville, TN",
        numberOfItemsInCart: 0,
        userName: "Jack Daniels"
    }
    componentDidMount(){
       // Get State from Parent component
    }
    addressHandler = ()=> {
        alert("This has not been implemented yet.")
    }
    render(){
         
        return(<div>
            <Nav>
                <Link to="/"><Logo src={navLogo}/></Link>
                <Address loggedIn= {this.state.isUserAuth} address={this.state.address} name={this.state.userName}/>
                <Searchbar/>
                <FlagIcon>
                    <option>🇺🇸</option>
                    <option>🇬🇧</option>
                    <option>🇷🇺</option>
                </FlagIcon>
                {this.state.isUserAuth ? <Link to="/account"><AddressLabel>Hello {this.state.userName} <br/> <BoldText>Go to your account</BoldText></AddressLabel></Link>: <Link to="/account"><AddressLabel>Hello, <br/> Sign into Account & Lists</AddressLabel></Link>}
                <Link to="/cart"><CartLogo src={cart}/><CartNumber>{this.state.numberOfItemsInCart}</CartNumber></Link>
                
            </Nav>
        </div>)
    }
}
export default NavBar;
