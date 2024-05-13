import React from 'react';
import { useSelector } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function Index() {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodoForm />
            <TodoList todos={todos} />
        </div>
    );
}

export default Index;