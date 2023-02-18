
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInvited from './pages/UserInvited';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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