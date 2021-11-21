import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            todos: [{ id: 0, task: 'Tarea 1', completed: false },]
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.removeCompleted = this.removeCompleted.bind(this);
    }

    //Creamos un newTodo, lo añadimos al estado previo(los todos anteriores)
    //y seteamos a null el valor de myref
    handleAddTodo = () => {
        const newTodo = { id: this.state.todos.length, task: this.myRef.current.value, completed: false }
        this.myRef.current.value = null;
        this.setState(prevState => ({
            todos: [...prevState.todos, newTodo]
        }))
    }

    //Descompondra todos recibiendo el arr de objects
    //Usara el metodo find para iterar y buscar el que coincida con el id
    updateValues = (id) => {
        const todos = [...this.state.todos]
        const todo = todos.find(todo => todo.id === id);
        todo.completed = !todo.completed
        this.setState(todos)
    }

    removeCompleted = () => {
        const todos = [...this.state.todos].filter((todo) => !todo.completed)
        console.log(todos)
        this.setState(prevState => ({
            todos: todos
        }))
    }

    render() {
        return (
            <>
                <TodoList content={this.state.todos} updateValues={this.updateValues} />
                <input type='text' ref={this.myRef} />
                <button onClick={this.handleAddTodo}>+</button>
                <button onClick={this.removeCompleted}>x</button>
                <h3>{`Te quedan ${[...this.state.todos].filter((todo) => !todo.completed).length} tareas por hacer`}</h3>
            </>
        )
    }
}

export default App