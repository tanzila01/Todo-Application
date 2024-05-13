import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table, Tag, Checkbox, Typography, Input } from 'antd';
import { DeleteOutlined, EditOutlined, CheckOutlined } from '@ant-design/icons';
import { RemoveTodo, changeTodoState, updateTodo } from '../redux/todoActions';
import '../css/todo.css';
const { Text } = Typography;
const { Column } = Table;

const TodoList = ({ todos }) => {
    const [todo, setTodo] = useState(null);
    const dispatch = useDispatch();

    const handleCheckboxChange = (todoItem) => {
        setTodo(null);
        dispatch(changeTodoState(todoItem));
    }

    const handleRemoveTodo = (id) => {
        dispatch(RemoveTodo(id));
    }

    const handleEditTodo = () => {
        setTodo(null);
        dispatch(updateTodo(todo));
    }

    const handleChange = (event) => {
        const { name, value } = event?.target;
        setTodo({ ...todo, [name]: value })
    }

    return (
        <>
            <Table dataSource={todos} pagination={false} className='table-container'>
                <Column
                    title="Mark"
                    dataIndex="id"
                    key="id"
                    render={(_, todoItem) => (
                        <Checkbox checked={todoItem?.done} onChange={() => handleCheckboxChange(todoItem)} />
                    )}
                />
                <Column
                    title="Title"
                    dataIndex="title"
                    key="title"
                    render={(_, todoItem) => (
                        <>
                            {
                                todo && todoItem.id === todo.id ? <Input defaultValue={todoItem?.title} name="title" onChange={(e) => handleChange(e)} /> :
                                    <Text className={todoItem?.done ? 'text-decor' : ''} level={5}>{todoItem?.title}</Text>
                            }
                        </>
                    )}
                />
                <Column
                    title="Description"
                    dataIndex="description"
                    key="description"
                    render={(_, todoItem) => (
                        <>
                            {
                                todo && todoItem.id === todo.id ? <Input defaultValue={todoItem?.description} name="description" onChange={(e) => handleChange(e)} /> :
                                    <Text className={todoItem?.done ? 'text-decor' : ''} level={5}>{todoItem?.description ? todoItem.description : '---'}</Text>
                            }
                        </>
                    )}
                />
                <Column
                    title="Status"
                    dataIndex="done"
                    key="done"
                    render={(done) => (
                        <Tag color={done ? 'green' : 'geekblue'} key={done}>
                            {done ? "Done" : "Todo"}
                        </Tag>
                    )}
                />
                <Column
                    title="Remove"
                    dataIndex="id"
                    key="id"
                    render={(_, todoItem) => (
                        <DeleteOutlined className='icon' onClick={() => handleRemoveTodo(todoItem?.id)} />
                    )}
                />
                <Column
                    title="Edit"
                    dataIndex="id"
                    key="id"
                    render={(_, todoItem) => (
                        <>
                            {
                                todo && todoItem.id === todo.id ? <CheckOutlined className='icon' onClick={() => handleEditTodo()} /> : <EditOutlined className='icon' onClick={() => setTodo(todoItem)} />
                            }
                        </>
                    )}
                />
            </Table>
        </>
    );
};

export default TodoList;