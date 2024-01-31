import React from "react";

import{ListItem, 
      ListItemText, 
      InputBase, 
      Checkbox,
      ListItemSecondaryAction,
      IconButton
} from "@material-ui/core"

import DeleteOutlined from "@material-ui/icons/DeleteOutlined"

// react에서 컴포넌트 클래스를 만들기 위해서 Component로부터 상속을 받기
class ToDo extends React.Component {
   //생성자
   constructor(props){
      //App.js에서 넘겨준 속성들을 자신의 props에 저장
      //this.props.item이라는 속성에 앞에서 전달한 데이터를 저장
      super(props); // 상위 클래스에서 넘겨준 모든 props를 현재 클래스에 저장
      
      //state 생성
      this.state = {item:props.item}

      // App.js에서 넘겨준 삭제 함수를 현재 클래스의 데이터로 변환
      this.delete = this.props.delete
   }

   //삭제 버튼을 누를 때 호출될 이벤트 핸들러
   deleteEventhandler = (e) => {
      this.delete(this.state.item)
   }

   // 화면에 출력할 내용을 리턴하는 메서드
   render(){
    const item = this.state.item;
     return(
       <ListItem>
        <Checkbox checked={item.done}/>
        <ListItemText>
            <InputBase
            inputProp={{"aria-label":"naked"}}
            type = "text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
            />
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label = "Delete ToDo" onClick={this.deleteEventhandler}>
                  <DeleteOutlined />
            </IconButton>
        </ListItemSecondaryAction>
       </ListItem>
    )
  }
}

export default ToDo;