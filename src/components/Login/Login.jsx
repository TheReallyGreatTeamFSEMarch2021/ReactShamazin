import React from 'react';
import styled, {css} from 'styled-components';


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
            <div>
               Login Page
            </div>
        )
    }
}


export default Login;