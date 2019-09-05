import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()

        this.state = {
            task: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <fieldset>
                    <legend>To Do List</legend>
                    <label>
                        Enter a task:
                        <input
                            type = 'text'
                            name = 'task'
                            placeholder = 'Enter a task to do here ... '
                            value = {this.task}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <button onClick = {() => this.props.addTodo(this.state.task)}>
                        Add to List
                    </button>
                    <button onClick = {this.props.clearCompleted}>Clear Completed</button>
                </fieldset>
            </form>
        )
    }
}

export default TodoForm