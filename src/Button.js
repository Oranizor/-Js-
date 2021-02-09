import React from 'react';
import styled from "styled-components";


const Unlocked_Button=styled.div`
  outline:none;
  float:right;
  left: 100%;
  text-align:center;
  line-height:42px;
  font-size: 14px;
  height: 42px;
  width: 147px;
  border-radius: 10px;
  background-color: #F6F6F6;
  margin: 10px 0 10px 0;
  border:  1.5px solid #F6F6F6;
  &:hover{
    border: 1.5px solid #CFCFCF;
  }
  &:active{
    border: 1.5px solid #858585;
    background-color:#DCDCDC;
  }
`

const Locked_Button=styled(Unlocked_Button)`
  background-color: #DCDCDC;
  border:  1.5px solid #BBBBBB;
  &:hover{
    border: 1.5px solid #858585;
    background-color:#DCDCDC;
  }
  &:active{
    border: 1.5px solid #858585;
    background-color:#DCDCDC;
  }
`

const ButtonTitle=styled.span`
    font-size: 14px;
    line-height: 42px;
    padding: 0 0 0 10px;
    text-align:center;
`

export default class Button extends React.Component{
    state={
        text:"未锁定",
        lock:0
    }
    onClickButton=()=>{
        if(this.state.lock===0){
            console.log("lock=0",this.state.lock);
            this.setState({
                text:"已锁定",
                lock:1
            })
        }else{
            console.log("lock=1",this.state.lock);
            this.setState({
                text:"未锁定",
                lock:0
            })
        }
    }

    render() {
        const Button= this.state.lock===0?Unlocked_Button:Locked_Button;

        const Icon=()=>{
            if(this.state.lock===0){
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14.065" viewBox="0 0 12 14.065">
                        <g id="组_491" data-name="组 491" transform="translate(-47.339 -13.435)">
                            <path id="路径_272" data-name="路径 272" d="M253.28,412.338a4.315,4.315,0,1,1-.915,5.423" transform="translate(-203.052 -397.102)" fill="none" stroke="#707070" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5"/>
                            <g id="矩形_702" data-name="矩形 702" transform="translate(47.339 18.5)" fill="#9b9b9b" stroke="#707070" strokeWidth="1.5">
                                <rect width="12" height="9" rx="2" stroke="none"/>
                                <rect x="0.75" y="0.75" width="10.5" height="7.5" rx="1.25" fill="none"/>
                            </g>
                        </g>
                    </svg>
                )
            }else{
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                        <g id="组_422" data-name="组 422" transform="translate(-9813 -2270)">
                            <g id="椭圆_63" data-name="椭圆 63" transform="translate(9814 2270)" fill="none" stroke="#707070" strokeWidth="1.5">
                                <circle cx="5" cy="5" r="5" stroke="none"/>
                                <circle cx="5" cy="5" r="4.25" fill="none"/>
                            </g>
                            <g id="矩形_702" data-name="矩形 702" transform="translate(9813 2275)" fill="#9b9b9b" stroke="#707070" strokeWidth="1.5">
                                <rect width="12" height="9" rx="2" stroke="none"/>
                                <rect x="0.75" y="0.75" width="10.5" height="7.5" rx="1.25" fill="none"/>
                            </g>
                        </g>
                    </svg>

                )
            }

        }

        return(
            <div style={{overflow:"hidden"}}>
                <Button onClick={this.onClickButton}>
                    <Icon/>
                    <ButtonTitle >{this.state.text}</ButtonTitle>
                </Button>
            </div>

        )
    }
}