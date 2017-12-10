import React, { Component } from 'react';
import Button from "antd-mobile/lib/button";
import 'antd-mobile/dist/antd-mobile.min.css'

class App extends Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大='张大喵'></一营>
        <骑兵连 老大='孙德胜'></骑兵连>
      </div>

    )
  }
}

function 骑兵连(props) {
  return <h2>骑兵连，{props.老大}</h2>
}

class 一营 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solders:['虎子', '柱子', '王根生']
    }
    console.log('组件初始化')
  }
  componentWillMount(){
    console.log('组件马上就要挂载了')
  }
  componentDidMount(){
    console.log('组件以及挂载')
  }
  componentWillReceiveProps(nextProps){
    console.log('组件将要接受父组件的值了')
  }
  shouldComponentUpdate(){
    console.log('组件是否更新')
    return true
  }
  componentWillUpdate(){
    console.log('组件将要更新')
  }
  componentDidUpdate(){
    console.log('组件已经更新')
  }
  componentWillUnmount(){
    console.log('组件卸载了')
  }
  addSolder(){
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()*10]
    })
  }
  render() {
    const boss = '张大喵'
    return (
      <div>
        <h2>一营,营长{this.props.老大}</h2>
        <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>
        <ul>
          {
            this.state.solders.map(k => {
              return <li key={k}>{k}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
