import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes " deadline = "today" description="Clean ad put away Dishes" />

      <Task title="laundry " deadline = "in 1 hour" description="fold laundry and put away" />
       
      <Task title="dinner " deadline = "tomorrow" description="Prepare and cook dinner" />
       

    </div>
  );
}

export default App;
