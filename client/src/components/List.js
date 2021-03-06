import React from 'react';
import Todo from './Todo'

const List = ({list, removeTodoListProp, editTodoListProp}) => {
    const renderedList = list.map(
        (item) => (
        <Todo 
        title={item.title} 
        removeTodoItemProp={(e) =>removeTodoListProp(item._id)} 
        completed={item.completed} 
        editTodoItemProp={(updatedItem) => editTodoListProp(item._id,updatedItem)}
        key={item.title}
      
        />
        )
        );
     return (
         <div className="ui grid center aligned">
          {renderedList}
         </div>
     );
}

export default List;