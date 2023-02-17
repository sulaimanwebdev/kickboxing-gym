
import Home from './pages/Home'
import UserInvited from './pages/UserInvited';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './pages/Register';

function App() {
  return (
    <div >
      <Router>
         <Routes>
         <Route exact path="/" element={<UserInvited/>} />
         <Route exact path="/register" element={<Register/>} />
         
         </Routes>
       </Router>
    </div>
  );
}

export default App;