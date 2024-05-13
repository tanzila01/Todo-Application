import { ADD_TODO, CHANGE_TODO_STATE, REMOVE_TODO, UPDATE_TODO } from './todoConstants';

const initialState = {
    todos: [
        { id: 1, title: 'Learn React', description: 'Complete React tutorial', done: false },
        { id: 2, title: 'Build Todo App', description: 'Create a todo application using React and Redux', done: false },
        { id: 3, title: 'Read Algorithym Fundamentals', description: 'Read fundamentals of the algorythms', done: false },
        { id: 4, title: 'Draft Documents', description: 'Draft new documents and save', done: true },
        { id: 5, title: 'Contact University HOD', description: 'Contact university HOD and ask for documents', done: true }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: state.todos.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                done: false
            };
            return {
                ...state,
                todos: [newTodo, ...state.todos]
            };

        case CHANGE_TODO_STATE:
            const { id, done } = action.payload;
            const index = state.todos.findIndex(item => item.id === id);
            if (done === true) {
                const item = state.todos.splice(index, 1)[0];
                state.todos.unshift(item);
            } else {
                const movedItem = state.todos.splice(index, 1)[0];
                state.todos.push(movedItem);
            };
            const updatedTodos = state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            );
            return {
                ...state,
                todos: updatedTodos
            };

        case REMOVE_TODO:
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                todos: filteredTodos
            };

        case UPDATE_TODO:
            const updatedTodo = state.todos.map((todo) =>
                todo.id === action.payload?.id ? { ...todo, ...action.payload } : todo
            );
            return {
                ...state,
                todos: updatedTodo,
            };

        default:
            return state;
    }
};

export default todoReducer;