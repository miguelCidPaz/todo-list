import { Component } from 'react'

//Recibimos el objeto y lo descomponemos en el estado
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content }
        this.handleTodoClick = this.handleTodoClick.bind(this);
    }

    handleTodoClick = () => {
        this.props.updateValues(this.state.id)
        console.log(this.state.completed)
    }

    render() {
        return (
            <li><input type='checkbox' checked={this.props.completed} onChange={this.handleTodoClick} />{this.state.task}</li>
        )
    }
}

export default TodoItem