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
`
const cartNumber = styled.h1`
    text-decoration: none;
`
const cartLogo = styled.img`
 height: 50px;
`


class NavBar extends Component {
    state={
        // PlaceHolders
        isUserAuth: true,
        address: "123 Fake St.",
        numberOfItemsInCart: 0
    }
    
    componentDidMount(){
       // Get State from Parent component
    }
    render(){
         
        return(<div>
            <Nav>
                <Link to="/"><Logo src={navLogo}/></Link>
                {this.state.isUserAuth ? <Link><Address address={this.state.address}/></Link>: <Link>Not Signed In</Link>}
                {
                // This should be a model?
                }
                <Searchbar/>
                <Language/>
                {this.state.isUserAuth ? <Link to="/account">Go to your account</Link>: <Link to="/register"><SignIn/></Link>}
                <Link to="/cart"><Logo src={cart}/><cartNumber>{this.state.numberOfItemsInCart}</cartNumber></Link>
                
            </Nav>
        </div>)
    }
}
export default NavBar;
