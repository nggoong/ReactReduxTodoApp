import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { changeInput, resetInput, toggle, insert, remove } from "../modules/todos";

const TodoContainer = () => {
    const { input, todos } = useSelector(({ todos }) =>({
        input: todos.input,
        todos: todos.todos
    }))
    const dispatch = useDispatch();

    const onChagneInput = useCallback((input)=> {
        dispatch(changeInput(input));
    }, [dispatch])
    
    const onInsert = useCallback((text) => {
        dispatch(insert(text));
    }, [dispatch]);

    const onResetInput = useCallback(()=> {
        dispatch(resetInput());
    }, [dispatch])

    const onToggle = useCallback((id)=> {
        dispatch(toggle(id));
    }, [dispatch])

    const onRemove = useCallback((id)=>{
        dispatch(remove(id));
    }, [dispatch])
    
    return(
        <TodoList todos={todos}
        input={input}
        onChangeInput={onChagneInput}
        onResetInput={onResetInput}
        onToggle={onToggle}
        onInsert={onInsert}
        onRemove={onRemove}/>
    )
}




export default TodoContainer;