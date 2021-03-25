import React, {Component} from 'react';
import navLogo from '../../assets/navLogo.png'
import {navLink} from 'react-router-dom';
import styled from 'styled-components';
class NavBar extends Component {
    state={

    }
    
    componentDidMount(){
       
    }
    render(){
         // Need to find another place to have this at
         const Nav = styled.div`
         width: 100vw;
         background-color: rgb(19,25,33);
         display: inline-block;
         `
         const Logo = styled.img`
             height: 50px;
             display: inline-block;
         `
         const navItem = styled.a`
             display: inline-block;
         `
        return(<div>
            <Nav>
                <Logo src={navLogo}/>
                <navItem src="/">Link</navItem>
            </Nav>
        </div>)
    }
}
export default NavBar;
