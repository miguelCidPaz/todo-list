import { Component } from 'react'
import TodoItem from './TodoItem'

//Recibo un arr de objetos y lo descompongo usando un map con lo que mando
//cada objeto a un todoitem
class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.content.map((todo, index) => {
                    return <TodoItem key={index} content={todo} updateValues={this.props.updateValues} />
                })}
            </ul>
        )
    }
}

export default TodoList