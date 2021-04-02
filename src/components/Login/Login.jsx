import React from 'react';
import styled, {css} from 'styled-components';
import '../../index.css';
import './Login.css';
import {Link} from 'react-router-dom';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "LOGIN PAGE",
            
        }   
    }

    
    componentDidMount(){
    }
    
    render(){   
        return(
            <div class="loginPageDiv">
                <div class="row col-12">
                    <div class="col-4"></div>
                    <div class="col-4 loginContent"> 
                        <img class="shamazinLoginLogo" src="https://shamazin.s3.amazonaws.com/shamazinLogo.jpeg" alt="shamazin logo"/>
                        <div class="SignInBox">
                            <span class="signInHeader" >Sign-In</span><br/>
                            <label class="emailOrPhoneNumText">Email or mobile phone number</label><br/>
                            <input class="inputForSignIn" type="text"></input><br/>
                            <button class="continueButton">Continue</button>
                            <p class="privacySpan">By continuing, you agree to Amazon's Conditions of Use and Privacy notice.</p>
                            
                        </div>
                        <div class="shamazinLoginLastDiv">
                        ---------- New to Amazon? ---------- <br/>
                            <button class="RegisterButton">
                                <Link class="linkToRegister" to='/register' >Create your Amazon account</Link>
                            </button>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>    
           
        )
    }
}


export default Login;