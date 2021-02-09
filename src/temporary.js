import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";


export default class Temporary extends React.Component{

    render(){
        if(this.props.edit===0){
            return (
                <div></div>
            )
        }else{
            return(
                <button style={{padding:"5px",margin:" 10px auto" ,position:"relative",display:"block"}}>
                    +（锁定、属性（可选）、地名）
                </button>
            )
        };

    }

}