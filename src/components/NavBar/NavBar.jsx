import React, {Component} from 'react';
import navLogo from '../../assets/navLogo.png'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Address from './NavBarItems/Address';
import Searchbar from './NavBarItems/Searchbar';
import Language from './NavBarItems/Language';
import SignIn from './NavBarItems/SignIn';
import cart from '../../assets/cart.png'
// Need to find another place to have this at
const Nav = styled.div`
    width: 100vw;
    background-color: rgb(19,25,33);
    display: inline-block;
    white-space: nowrap;
`
const Logo = styled.img`
    height: 50px;
    text-decoration: none;
    color: white;
`;
const CartNumber = styled.p`
    font-size: 1.5em;
    color: rgb(240,136,4);
    display: inline-block
`;
const CartLogo = styled.img`
    height: 25px;
`;
class NavBar extends Component {
    state={
        // PlaceHolders
        isUserAuth: false,
        address: "Nashville, TN",
        numberOfItemsInCart: 0,
        userName: "Jack Daniels"
    }
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
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
                <select>
                    <option>🇺🇸</option>
                    <option>🇬🇧</option>
                    <option>🇷🇺</option>
                </select>
                {this.state.isUserAuth ? <Link to="/account">Go to your account</Link>: <Link to="/account">Hello, Sign in Account & Lists</Link>}
                <Link to="/cart"><CartLogo src={cart}/><CartNumber>{this.state.numberOfItemsInCart}</CartNumber></Link>
                
            </Nav>
        </div>)
    }
}
export default NavBar;
