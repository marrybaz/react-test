import React from 'react'
import ToDoItem from './ToDoItem'
import ItemData from './ItemData'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';

function MyToDo() {
    const data = ItemData.map(item => <ToDoItem name={item.name} content={item.content} key={item.id} />)
    return (
        <div>
            {data}
            <Griddle
    data={ItemData}
    plugins={[plugins.LocalPlugin]}
  />
        </div>
    )

}

export default MyToDo