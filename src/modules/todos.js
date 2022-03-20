// 액션 타입 정의

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const RESET_INPUT = 'todos/RESET_INPUT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const INSERT = 'todos/INSERT';

// 액션 생성 함수

export const changeInput = (input) => ({
    type:CHANGE_INPUT,
    input
})

export const resetInput = () => ({
    type:RESET_INPUT
})

let id = 3;

export const insert = (text) => ({
    type:INSERT,
    todo: {
        id: id++,
        text: text,
        done: false
    }

})

export const remove = (id) => ({
    type:REMOVE,
    id
})

export const toggle = (id) =>({
    type:TOGGLE,
    id
})



const initState = {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 마스터하기',
            done:true
        },
        {
            id:2,
            text:'리덕스 이해하기',
            done:false
        }
    ]
}



// 리듀서
const todos = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return{
                ...state,
                input:action.input
            }
        case RESET_INPUT:
            return {
                ...state,
                input:''
            }
        
        case INSERT:
            return{
                ...state,
                todos : state.todos.concat(action.todo)
            }

        case REMOVE:
            return {
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.id)
            }

        case TOGGLE:
            return {
                ...state,
                todos : state.todos.map(todo=> {
                    if(todo.id === action.id) todo.done = !todo.done;
                    return todo;
                })
            }

        default:
            return state;
    }
}

export default todos;