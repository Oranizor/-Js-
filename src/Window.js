import React from 'react';
import styled from "styled-components";

const Window=styled.div`
  position: relative;
  border-radius: 10px;
  background-color: white;
  width: 350px;
  margin: auto;
  box-shadow: 0px 3px 6px #d6d6d6;
  padding: 10px 20px 20px 20px;
`

export default class ControlWindow extends React.Component{
    render() {
        return(
            <Window>
                {this.props.children}
            </Window>

        )
    }
}