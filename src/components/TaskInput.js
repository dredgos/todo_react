import { Component } from 'react';
import Button from 'react-bootstrap/Button'



class TaskInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            input: "",
            tasks: [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleClick() {
        let {tasks, input} = this.state;
        if (input !== "") {
            this.setState({tasks: [...tasks, input], input : ""})
        }
    
    }

    handleChange(e) {
        this.setState({input: e.currentTarget.value});
    }


    render() {
        let{input, tasks} = this.state;
        return (
            <div className="">
                <form>
                    <input type="text" onChange={this.handleChange} />
                    <Button onClick={this.handleClick} size="lg" variant="info">Add Task</Button>
                </form>
            </div>
        );
    }
}

export default TaskInput;