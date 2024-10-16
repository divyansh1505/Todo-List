import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodos, index, handleEditTodos} = props
  return (
    <li className='todoItem'>
      {children}
       <div className = 'actionContainer'>
          <button onClick={()=>{handleDeleteTodos(index)}}>
            <i className="fa-solid fa-trash"></i>
            </button>
          <button onClick={()=>{handleEditTodos(index)}}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
        </div>
        </li>
  )
}
