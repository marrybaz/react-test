import React from 'react'

const ToDoItem = (props) => <div><input type = "checkbox" name = {props.name} /><span>{props.content}</span></div>

export default ToDoItem