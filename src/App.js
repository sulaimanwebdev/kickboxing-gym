
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInvited from './user-pages/UserInvited';
import Register from './user-pages/Register';
import Dashboard from './user-pages/Dashboard';
import Calendar from "./user-pages/Calendar";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<UserInvited/>} />
         <Route exact path="/register" element={<Register/>} />
         <Route exact path="/dashboard" element={<Dashboard/>} />
         <Route exact path="/calendar" element={<Calendar/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;