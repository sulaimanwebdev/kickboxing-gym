
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInvited from './user-pages/UserInvited';
import Register from './user-pages/Register';
import Dashboard from './user-pages/Dashboard';

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<UserInvited/>} />
         <Route exact path="/register" element={<Register/>} />
         <Route exact path="/dashboard" element={<Dashboard/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;