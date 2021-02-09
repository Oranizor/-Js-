import React from 'react';
import styled from "styled-components";
import ItemsDiv from "./ItemsDiv";



export default class ManuCon extends React.Component{
    render() {
        if(this.props.Edit===0){
            return null;

        }else {
            return (
                <ItemsDiv>
                    hello

                </ItemsDiv>
            )
        }
    }
}