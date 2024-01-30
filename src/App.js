import './App.css';

import React from 'react'
import ToDo from "./ToDo" // ./는 현재 파일 위치
import {Paper, List, Container} from "@material-ui/core"
import AddToDo from './AddToDo';

class App extends React.Component {
  constructor(props){
    super(props)
    /// 3개의 객체를 가진 배열을 생성
    this.state = {items:[{id:0, title:"React", done:true},
                        {id:1, title:"Angular", done:false},
                        {id:2, title:"Vue", done:false}]}
    /// 데이터를 추가하는 함수
  }
    add = (item) => {
      // state는 수정이 가능하지만 원본을 직접 수정하는 것은 불가
      // setState 메서드를 이용해서만 수정이 가능

      // 배열에 데이터를 추가하기 위해서 state의 배열을 복사
      const thisItems = this.state.items;
      // item의 id와 done 값을 설정 - title만 입력하기 때문
      item.id = "ID" + thisItems.length;
      item.done = false;

      // 복사한 데이터에 데이터를 추가
      thisItems.push(item)
      // 복사한 데이터를 다시 state에 적용
      this.setState({items:thisItems})
    }

  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해야
    //key 설정 X => 출력에 문제 없지만 콘솔에 에러 출력
    var display = this.state.items.length > 0 && (
      <Paper style = {{margin : 16}}>
          <List>
            {this.state.items.map((item, idx) => (
              <ToDo item ={item} id = {idx}/>            
              ))}
          </List>
      </Paper>
    )
    return(
      <div className='App'>
        <Container maxWidth = "md">
        <AddToDo add={this.add}/>
        {display} 
        </Container>
      </div>
    )
  }
}

export default App;

