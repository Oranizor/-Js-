import React from 'react';
import styled,{keyframes} from "styled-components";

const move=keyframes`
    from {left:2px}
    to {left:16px}
`
const moveback=keyframes`
  from {left:16px}
  to {left:2px}
`

const Outter=styled.div`
  position: relative;
  background-color: ${props=>props.Edit===0?"#E9E9E9":"#008A2C"};
  border-radius: 20px;
  height: 18px;
  width: 32px;
`

const Inner=styled.div`
  display: inline-block;
  position: absolute;
  left: ${props=>props.Edit===0?"2px":"16px"};
  top:1.8px;
  background-color: ${props=>props.Edit===0?"white":"white"};
  width: 14px;
  height: 14px;
  border-radius: 10px;
  animation: ${props=>{
      if(props.Init===1){
        return(
                props.Edit===1?move:moveback
        )
      }else{
        return(
                props.Edit===1?move:null
        )
      }
  }} 0.1s linear
  
`

export default class Switch extends React.Component{
    constructor(props) {
        super(props);
    }

    state={
        init:0,
    }

    SwitchEditstate=()=>{
        this.props.Switch();
        this.setState({
            init:1,
        })
    }

    render() {
        console.log("edit(传入)=",this.props.Edit)
        return(
            <div style={{position:"relative",display:"inline-block", margin:"0 0 0 10px",verticalAlign:"middle"}}>
                <Outter onClick={this.SwitchEditstate} Edit={this.props.Edit}/>
                <Inner  onClick={this.SwitchEditstate} Edit={this.props.Edit} Init={this.state.init}/>
            </div>
        )
    }
}