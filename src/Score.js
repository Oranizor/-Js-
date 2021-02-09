import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const Process_0=styled.div`
  font-size: 14px;
  position: relative;
  left: 0%;
`

const Process_5=styled.div`
  top:0px;
  font-size: 14px;
  position: absolute;
  left: ${props =>props.perarry[0]}%;
  color:rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]});
  opacity: ${props=>props.percent<props.perarry[0]?0.2:1};
  
`
const Process_7=styled.div`
  top:0px;
  font-size: 14px;
  position: absolute;
  left: ${props => props.perarry[1]}%;
  color:rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]});
  opacity: ${props=>props.percent<props.perarry[1]?0.2:1};
`

const Process_10=styled.div`
  top:0px;
  font-size: 14px;
  position: absolute;
  right: 0%;
  color:rgb(${props=>props.color[0]},${props=>props.color[1]},${props=>props.color[2]});
  opacity: ${props=>props.percent<props.perarry[2]?0.2:1};
`

export default class Score extends React.Component{
    constructor(props) {
        super(props);
        this.score1=this.props.Scor_cal(this.props.perarry[0]);
        this.score2=this.props.Scor_cal(this.props.perarry[1]);
        this.score3=this.props.Scor_cal(this.props.perarry[2]);
        this.color1=props.Color_cal(this.props.perarry[0]);
        this.color2=props.Color_cal(this.props.perarry[1]);
        this.color3=props.Color_cal(this.props.perarry[2]);
    }

    render(){
        this.score=this.props.Scor_cal(this.props.percent);
        return(
            <div>
                <div style={{position:"relative"}}>
                    <Process_0
                        style={{fontWeight:"bolder",fontSize:"24px"}}

                    >{this.score}</Process_0>
                    <Process_5
                        style={{fontWeight:"bolder",fontSize:"24px"}}
                        perarry={this.props.perarry}
                        color={this.color1}
                        percent={this.props.percent}
                    >{this.score1}</Process_5>
                    <Process_7
                        style={{fontWeight:"bolder",fontSize:"24px"}}
                        perarry={this.props.perarry}
                        color={this.color2}
                        percent={this.props.percent}
                    >{this.score2}</Process_7>
                    <Process_10
                        style={{fontWeight:"bolder",fontSize:"24px"}}
                        perarry={this.props.perarry}
                        color={this.color3}
                        percent={this.props.percent}
                    >{this.score3}</Process_10>
                </div>
                <div style={{position:"relative"}}>
                    <Process_0
                        perarry={this.props.perarry}
                    >{this.props.percent}%</Process_0>
                    <Process_5
                        style={{color:this.props.percent<this.props.perarry[0]?"black":null}}
                        perarry={this.props.perarry}
                        color={this.color1}
                        percent={this.props.percent}
                    >{this.props.perarry[0]}%</Process_5>
                    <Process_7
                        style={{color:this.props.percent<this.props.perarry[1]?"black":null}}
                        perarry={this.props.perarry}
                        color={this.color2}
                        percent={this.props.percent}
                    >{this.props.perarry[1]}%</Process_7>
                    <Process_10
                        style={{color:this.props.percent<this.props.perarry[2]?"black":null}}
                        perarry={this.props.perarry}
                        color={this.color3}
                        percent={this.props.percent}
                    >{this.props.perarry[2]}%</Process_10>
                </div>
            </div>
        )
    }
}
