import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { changeInput, resetInput, toggle, insert, remove } from "../modules/todos";

const TodoContainer = ({ todos, changeInput, resetInput, input, toggle, insert, remove }) => {

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