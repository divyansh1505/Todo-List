
// A placeholder is a temporary value or text displayed in an input field or a user 
// interface element, giving users a hint about the kind of data they need to enter. 
// It typically disappears when the user starts typing.

//onClick is self explainatory. This are called events btw


import { useState } from 'react'

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props

// // "export default function TodoInput({ handleAddTodos }) {" YOU CAN DO THIS WHEN BS
// //EK KO BAHAR SE LARHE HO, otherwise its recommoned ki {} ke andar kuch cheej daalo, and bahar usme deconstruct krdo



//   //jo bhi function vaha pass kia tha, yaha aake usko destructure krna h
//   //Ab obviously isko me button me dalunga, like jo add ki button h usko
//   // i will give power of adding new todos

//   // const [todoValue, setTodoValue] = useState('')
//   // parenthesis k andar uski default value kya h vo define ki jaati h.
//   // like here its an empty string, and app.jsx me it was empty array
//   // i am moving that to App.jsx

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter Todo...."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue)
          setTodoValue('') // Clear the input field
        }}
      >
        Add
      </button>
    </header>
  )
}
