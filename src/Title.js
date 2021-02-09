import React from 'react';
import styled from "styled-components";

const Titles=styled.div`
  display: inline-block;
  margin:10px 0px 10px 0px;
  color: #9e9e9e;
  font-size: 14px;
  font-weight: bolder;
`

export default class Title extends React.Component{
    render() {
        return(
            <Titles>
                {this.props.children}
            </Titles>

        )
    }
}