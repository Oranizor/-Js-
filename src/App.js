
import React from 'react';
import {Component} from "react/cjs/react.production.min";
import Slider from './Slider';
import Button from "./Button";
import Score from "./Score";
import ControlWindow from "./Window";
import Title from "./Title";
import ItemsDiv from "./ItemsDiv";
import styled from "styled-components";
import Temporary from "./temporary";
import Switch from "./Switch";
import ManuCon from "./ManuCon";

class App extends Component{
    constructor(props) {
        super(props);
        this.percentarray=[50,60,90];
    }

    state={
        percent:15,
        edit:0,
    }

    Score_cal=(perc)=>{
        const score=(perc/10+0.5).toFixed(0);
        return score;
    }

    Reset_Percent=(value)=>{
        this.setState({
            percent:value,
        })
    }

    Switch_Edit=()=>{
        if(this.state.edit===0){
            this.setState({
                edit:1,
            })
        }else{
            this.setState({
                edit:0,
            })
        }
    }

    Color_cal(res){
        const color=[0,0,0];
        const color0=[255,43,0];
        const color20=[255,133,0];
        const color35=[255,187,0];
        const color50=[250,247,0];
        const color65=[218,255,0];
        const color80=[160,239,14];
        const color90=[59,162,83];
        const color100=[59,162,83];
        if(res<20){
            for(let i=0;i<=2;i++){
                color[i]=color0[i]+(color20[i]-color0[i])*res/20;
            }
        }
        else if(res<35){
            for(let i=0;i<=2;i++){
                color[i]=color20[i]+(color35[i]-color20[i])*(res-20)/15;
            }
        }
        else if(res<50){
            for(let i=0;i<=2;i++){
                color[i]=color35[i]+(color50[i]-color35[i])*(res-35)/15;
            }
        }
        else if(res<65){
            for(let i=0;i<=2;i++){
                color[i]=color50[i]+(color65[i]-color50[i])*(res-50)/15;
            }
        }
        else if(res<80){
            for(let i=0;i<=2;i++){
                color[i]=color65[i]+(color80[i]-color65[i])*(res-65)/15;
            }
        }
        else if(res<90){
            for(let i=0;i<=2;i++){
                color[i]=color80[i]+(color90[i]-color80[i])*(res-80)/10;
            }
        }
        else{
            for(let i=0;i<=2;i++){
                color[i]=color90[i]+(color100[i]-color90[i])*(res-90)/10;
            }
        }
        return color;
    }


    render(){
        console.log("edit=",this.state.edit);
        return(
            <div className="App">
                <ControlWindow>
                    <Title style={{display:"block"}}>得分</Title>
                    <Score percent={this.state.percent} perarry={this.percentarray} Reset={this.Reset_Score} Scor_cal={this.Score_cal} Color_cal={this.Color_cal}/>
                    <Slider percent={this.state.percent} Reset={this.Reset_Percent} Color_cal={this.Color_cal}/>
                    <Button />
                    <Title>自动优化</Title>
                    <ItemsDiv>
                        尚未进行自动优化
                    </ItemsDiv>
                    <Title>手动优化项</Title>
                    <Switch Edit={this.state.edit} Switch={this.Switch_Edit}/>
                    <ManuCon Edit={this.state.edit}/>
                </ControlWindow >
                <Temporary edit={this.state.edit} Switch={this.Switch_Edit} Item={this.Items_simulator}/>
            </div>
        )
    }
}
//cjysb

export default App;
