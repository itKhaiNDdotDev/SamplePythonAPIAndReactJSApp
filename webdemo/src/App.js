import logo from './logo.svg';
import './App.css';
import { deleteStudent, getStudents } from './services/studentService'

function App() {

  function handleDelete(id) {
    try {
      deleteStudent().then(response => {
        // setStudents(students.filter(student => student._id !== id));
      }).catch(error => {
        console.error(error);
        getStudents()
      });
    } catch(ex) {
      console.log(ex)
    }
  }

  return (
    <div className="App">
      <button className="btn" onClick={() => { handleDelete() }}>My button</button>
      <button className="btn" onClick={() => { deleteStudent() }}>My button</button>
    </div>
  );
}

export default App;
