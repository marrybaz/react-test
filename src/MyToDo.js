import React from 'react'
import ToDoItem from './ToDoItem'
import ItemData from './ItemData'

function MyToDo() {
    const data = ItemData.map(item => <ToDoItem name={item.name} content={item.content} key={item.id} />)
    return (
        <div>
            {data}
        </div>
    )

}

export default MyToDo