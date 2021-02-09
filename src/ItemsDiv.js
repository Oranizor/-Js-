import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const Background=styled.div`
  text-align:center;
  color: #9e9e9e;
  font-size: 14px;
  line-height:40px;
  background-color: #F9F9F9;
  width: 100%;
  border-radius: 10px;
`

export default class ItemsDiv extends React.Component{

    state={

    }

    render(){
        return(
                <Background onClick={this.props.Switch}>
                    {this.props.children}
                </Background>
        )
    }

}