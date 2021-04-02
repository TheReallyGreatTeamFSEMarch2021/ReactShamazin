import React, {Component} from 'react';
import navLogo from '../../assets/navLogo.png'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Address from './NavBarItems/Address';
import Searchbar from './NavBarItems/Searchbar';
import cart from '../../assets/cart.png';
import './NavBar.css';

// Need to find another place to have this at
const Nav = styled.div`
    width:100% ;
    background-color: rgb(19,25,33);
    background-color:#0c0c0c;
    // white-space: nowrap;
    margin: 0;
    display:flex;
    -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
    
    padding-left: 10px;
    padding-right:10px;
    
`
const Logo = styled.img`
    height: 40px;
`;
const CartNumber = styled.p`
    font-size: 1.5em;
    color: rgb(240,136,4);
    display: inline-block;
    
`;
const CartLogo = styled.img`
    width:35px;
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
    border: none;
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
        const cart2 = "https://shamazin.s3.amazonaws.com/amazonWhiteCart.jpg";
        return(<div>
            <Nav>
                <div class="shamazinLogo">
                    <Link to="/"><Logo src="https://shamazin.s3.amazonaws.com/shamazinLogoBlack.png"/></Link>
                </div>
                &emsp;
                <div class="centeredVert">
                    <Address loggedIn= {this.state.isUserAuth} address={this.state.address} name={this.state.userName}/>
                </div>
                <div class="centeredVert">
                    <Searchbar/>
                </div>
                
                <FlagIcon>
                    <option>🇺🇸</option>
                    <option>🇬🇧</option>
                    <option>🇷🇺</option>
                </FlagIcon>
                &emsp;

                <div class="centeredVert">
                    {this.state.isUserAuth ? <Link to="/login"><AddressLabel>Hello {this.state.userName} <br/> <BoldText>Go to your account</BoldText></AddressLabel></Link>: <Link to="/login"><AddressLabel> <div>Hello, Sign in <br/>Account & Lists</div></AddressLabel></Link>}
                </div>
                &emsp;
                &emsp;
                <div class="centeredVert">
                    <Link to="/login"  class="centeredVert2"><CartLogo src={cart}/><CartNumber><span class="numItemsInCart">{this.state.numberOfItemsInCart}</span></CartNumber></Link>
                </div>
                
            </Nav>
        </div>)
    }
}
export default NavBar;
