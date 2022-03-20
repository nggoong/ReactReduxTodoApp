import React, { useState, useCallback } from 'react';
import Empty from './Empty';

const TodoItem = ({ todo, onToggle, onRemove }) => {
    console.log('Todoitem');

    return(
        <div className='item-wrapper'>
            <div className="item-check" onClick={()=>onToggle(todo.id)}>
                <p>{todo.done? '✔' : '👌' }</p>
            </div>
            <div className="item-text">
                <p className={(todo.done? 'done' : '')}>{todo.text}</p>
            </div>
            <div className='item-btns'>
                <button onClick={()=>onRemove(todo.id)}>delete</button>
            </div>
        </div>
    )
}


const TodoList = ({ todos, input, onChangeInput, onResetInput, onToggle, onRemove, onInsert }) => {
    console.log('todolist');

    const onChangeHandler = (e) => {
        onChangeInput(e.target.value);
        console.log(input);
    }

    const onBtnClickHandler = ()=> {
        if(input === '') return;
        onInsert(input);
        onResetInput();
    }

    return(
        <div className='todo-wrapper'>
            <div className="todo-input">
                <input type="text" value={input} onChange={onChangeHandler}/>
                <button onClick={onBtnClickHandler}>submit</button>
            </div>

            
            
            <div className="todo-viewer">
            <Empty></Empty>
                {todos.map(todo=>(
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} onInsert={onInsert}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;