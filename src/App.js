import './App.css';

import React from 'react'
import ToDo from "./ToDo" // ./는 현재 파일 위치


class App extends React.Component {
  constructor(props){
    super(props)
    /// 3개의 객체를 가진 배열을 생성
    this.state = {items:[{id:0, title:"React", done:true},
                        {id:1, title:"Angular", done:false},
                        {id:2, title:"Vue", done:false}]}
  }
  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해야
    //key 설정 X => 출력에 문제 없지만 콘솔에 에러 출력
    var display = this.state.items.map((item, idx) => (
      <ToDo item = {item} key={item.id} />
    ) );
    return(
      <div className='App'>
        {display} 
      </div>
    )
  }
}

export default App;

