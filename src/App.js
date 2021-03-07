import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DisplayTask from './components/DisplayTask';
import Header from './components/Header';
import TaskInput from './components/TaskInput';

let tasks = []

function App() {
  return (
    <div className="container">
      <Header title="To Do List" />
      <TaskInput />
      <DisplayTask />
    </div>
  );
}

export default App;
