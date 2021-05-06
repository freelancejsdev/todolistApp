import React , { useState, useEffect } from 'react';
import todos from './apis';

import TodoForm from './components/TodoForm'
import Section from './components/Section';
import Heading from './components/Heading';
import List from  './components/List';





function App() {

  const [todoList, setTodoList] = useState([]);

  useEffect( ()=>{
   async function fetchData(){
     const {data} = await todos.get("/todos")
     setTodoList(data);
    }
    fetchData();
    },[]);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos",item)
    setTodoList((oldList)=>[...oldList,data]);
  }

  const removeTodo = async (id) => {
   await todos.delete(`/todos/${id}`)
     setTodoList((oldList) => oldList.filter((item) => item._id !== id)); 
  }

  const editTodo = async(id,item) => {
    await todos.put(`/todos/${id}`,item)
  }
  return (
    
         <div className ="ui container center aligned">
        <Section>
          <Heading  />
        </Section> 

       <Section>
       <TodoForm addTodo={addTodo}/>
       </Section> 

       <Section>
         <List 
         editTodoListProp={editTodo}
         removeTodoListProp= {removeTodo} 
         list={todoList}
          />
       </Section>

       </div>
     
  );
}

export default App;
