import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentList from './views/StudentList';
// import StudentDetail from './views/StudentDetail';
// import AddStudent from './views/AddStudent';
// import EditStudent from './views/EditStudent';

function App() {
    return (
        // <Router>
        //     <div className="container">
        //         <Routes>
        //             <Route exact path="/" component={StudentList} />
        //             {/* <Route path="/student/:id" component={StudentDetail} /> */}
        //             {/* <Route path="/add-student" component={AddStudent} /> */}
        //             {/* <Route path="/edit-student/:id" component={EditStudent} /> */}
        //         </Routes>
        //     </div>
        // </Router>
        <div>
             <button className="btn" onClick={() => { alert("CLICKED!")}}>My button</button>
        </div>
    );
}

export default App;