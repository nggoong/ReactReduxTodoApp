import { connect, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { changeInput, resetInput, toggle, insert, remove } from "../modules/todos";

const TodoContainer = ({ changeInput, resetInput, toggle, insert, remove }) => {
    const todos = useSelector(state => state.todos.todos);
    const input = useSelector(state => state.todos.input);
    
    return(
        <TodoList todos={todos} input={input} onChangeInput={changeInput}
        onResetInput={resetInput}
        onToggle={toggle} onInsert={insert} onRemove={remove}/>
    )
}




export default connect(
    state => ({
        todos: state.todos.todos,
        input: state.todos.input,
    }),
    {
        changeInput,
        resetInput,
        toggle,
        insert,
        remove
    }   
)(TodoContainer);