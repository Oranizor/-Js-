import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const State_point=styled.div`
  position:absolute;
  top:-4px;
  height: 12px;
  width:12px;
  border-radius: 12px;
  border: white 3px solid;
  box-shadow: 0 3px 6px #d6d6d6;
  left:${props=>props.percent -1}%;
  background-color: rgb(${props=>props.colorarray[0]},${props=>props.colorarray[1]},${props=>props.colorarray[2]});
`

const Unprocess_bar=styled.div`
  top: 0;
  position:absolute;
  right: -1px;
  height: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #F9F9F9;
  width: ${props=> 100-props.percent}%
`
const Process_bar=styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  margin: 5px 0 5px 0;
  cursor: pointer;
  background-image: linear-gradient( 90deg, rgb(255,43,0) 0%, rgb(255,133,0) 20%, rgb(255,187,0) 35%, rgb(250,247,0) 50%, rgb(218,255,0) 65%, rgb(160,239,14) 80%, rgb(59,162,83) 90%, rgb(59,162,83) 100%);
`
const Process_bar_bord=styled.div`
  margin-top: 10px;
  position: relative;
`


export default class Slider extends React.Component{
    //构造函数，一般用于写类的属性和子组件的Ref，完整使用Ref要在三个地方同时写，这里是声明，下面有调用和绑定
    constructor(props) {
        super(props);//必须要写，不写报错
        this.Process_bar_bord_Ref = React.createRef();
        this.Unprocess_bar_Ref = React.createRef();
        this.Status_point_Ref = React.createRef();
        this.Process_bar_Ref = React.createRef();
        this.color=[0,0,0];
    }

    //state，一切在使用中会变的对象都应该写在这里，一个组件最重要的东西。
    state = {
        value: this.props.percent
    };


    onPointMove = (e) => {
        var initclientX = e.clientX;
        var res0 = this.state.value; //原百分数
        var width = this.Process_bar_Ref.current.offsetWidth;//计算进度条总长度，Ref调用。这里不应该把width移到构造函数中定义，因为那个时候还没有DOM实例供Ref调用
        document.onmousemove = (e) => {
            var change = e.clientX - initclientX;
            var res = (res0 + change/width*100).toFixed(0); //得到目前鼠标所在位置相对整个进度条的比例
            res = Math.max(0, res);
            res = Math.min(100,res);
            this.setState({value: res});
            this.props.Reset(res);
            //使用setState给State中数据赋值会让组件重新渲染，所以将State的数据作为Style送入组件中即可实现动态变化。
            //相反，如果使用State.value = 赋值，虽然也能赋值，但不会重新渲染。
        };
        document.onmouseup = () => {
            document.onmousemove = null;
        };
    }
    onBarMove = (e) => {
        var res0 = this.state.value;//原先的百分比值
        var width = this.Process_bar_Ref.current.offsetWidth;//process_bar的宽度(需要Process_bar_Ref.)
        //美妙的findDOMNode，建议收藏，每日欣赏
        var pointcoor = ReactDOM.findDOMNode(this.Status_point_Ref.current).getBoundingClientRect().left;//原来状态点的中心坐标（左坐标+8），需要Status_point_Ref
        var change = e.clientX - pointcoor;//鼠标目前位置和原先坐标的差值
        var res = (res0 + change/width*100).toFixed(0); //得到目前鼠标所在位置相对整个进度条的比例
        res = Math.max(0, res);
        res = Math.min(100,res);
        this.setState({value: res});
        this.props.Reset(res);
        var initclientX = e.clientX;//鼠标初始位置
        console.log("moving");
        document.onmousemove = (e) => {
            var move = e.clientX - initclientX;//鼠标移动的距离
            var res1 = (res+move/width*100).toFixed(0); //得到目前鼠标所在位置相对整个进度条的比例
            res1 = Math.max(0, res1);
            res1 = Math.min(100,res1);
            this.setState({value: res1});
            this.props.Reset(res1);
            //使用setState给State中数据赋值会让组件重新渲染，所以将State的数据作为Style送入组件中即可实现动态变化。
            //相反，如果使用State.value = 赋值，虽然也能赋值，但不会重新渲染。
        };
        document.onmouseup = () => {
            document.onmousemove = null;
        };
    }

    render = () => { //会调用无数遍的render方法，应尽可能精简
        this.color=this.props.Color_cal(this.state.value); //防止初始渲染NaN
        return(
            <div >
                <Process_bar_bord ref={this.Process_bar_bord_Ref}>
                    <Process_bar
                        ref={this.Process_bar_Ref}
                        onMouseDown= {e => this.onBarMove(e)}
                    />
                    <Unprocess_bar
                        percent={this.state.value}
                        onMouseDown = {e => this.onBarMove(e)}
                    />
                    <State_point
                        ref={this.Status_point_Ref}
                        onMouseDown={e => this.onPointMove(e)}
                        colorarray={this.color}
                        percent={this.state.value}
                    />
                </Process_bar_bord >
            </div>
        );
    };
}
