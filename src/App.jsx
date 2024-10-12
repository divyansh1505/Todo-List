import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"
import { useState, useEffect} from "react"

function App() {
// State variable use krte h for the variable when a user interacts with it
 const  [todos, setTodos] = useState([])
 const [todoValue, setTodoValue] = useState('')

 function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos: newList }))
}

 // let todos = [
  //   'Go to the gym',
  //   'Eat more veggies',
  //   'Bully the kids at school',   
  // ]  - THIS IS THE NORMAL WAY, HERE AND UPAR BOTH THE PLACES WE HAVE DEFINED todos

  function handleAddTodos(newTodos){
    const newTodoList = [...todos, newTodos]
    //first we spread out the old todos, and then newTodos as this function is expecting new todos
    persistData(newTodoList)
    setTodos(newTodoList) //This will update it
  }
 
  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
  }
  // The filter method creates a new array by iterating over the todos array.
  // For each element (todo) in the array, it also provides the index 
  // (todoIndex), which is the current position of the element in the list.
  // The filter method checks the condition inside the return statement and 
  // keeps only the elements that meet the condition.

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])



  return (
    <main>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      {/* we basically passed this down as an attribute ka part. And now we can use it
      in TodoInput and TodoList. TodoList me list ko pass kia h and TodoInput me 
      us function ko which can add new todos */}
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
      {/* that phla todos is property ka name */}
    </main>
  )
}

export default App
