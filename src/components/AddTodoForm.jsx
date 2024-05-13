import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { addTodo } from '../redux/todoActions';
import '../css/todo.css';

const AddTodoForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        form.resetFields();
        dispatch(addTodo(values.title, values.description));
    };

    return (
        <div className='form-container'>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                className='form-tag'
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Title',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: false,
                            message: 'Description',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddTodoForm;