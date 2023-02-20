
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInvited from './user-pages/UserInvited';
import Register from './user-pages/Register';
import Dashboard from './user-pages/Dashboard';
import Calendar from "./user-pages/Calendar";
import AccountManagment from "./user-pages/Account-Managment";

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<UserInvited/>} />
         <Route exact path="/register" element={<Register/>} />
         <Route exact path="/dashboard" element={<Dashboard/>} />
         <Route exact path="/calendar" element={<Calendar/>} />
         <Route exact path="/account-managment" element={<AccountManagment/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;