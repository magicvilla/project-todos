import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import uniqid from 'uniqid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import '../css/TodoForm.css'

import todos from '../reducers/todos'

const TodoForm = () => {
    //user input state 
    const [value, setValue] = useState('')

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        //dispatch an action to add new todo item
        dispatch(
            todos.actions.addTodo({
                id: uniqid(),
                description: value,
                isComplete: false
            })
        )
        //Clear input
        setValue('')
    }

    return (
        <form onSubmit={onFormSubmit} className="form-input-wrapper">
            <TextField 
                required
                className="form-input"
                id="outlined-basic"
                label="Add new task"
                variant="outlined"
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                startIcon={<SaveIcon />}
                aria-label="add todo"
            >
                Add Task
            </Button>
        </form>
    )
}

export default TodoForm