import { Component } from 'react';

class DisplayTask extends Component {
    
    
    render() {
        
        let tasks = ['Something', 'Something else'];
        

        return (
            <div>
                <ul className="list-group">
                    <h2>Current Tasks</h2>
                    {tasks.map((value, index) => (<li className="list-group-item" key={index}>{value}</li>))}
                </ul>
                
            </div>
        );
    }
}

export default DisplayTask;