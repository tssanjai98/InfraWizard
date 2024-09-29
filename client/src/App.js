import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import UserAccountpage from "./pages/UserAccountpage";
import UserRequirmentspage from "./pages/UserRequirmentspage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/user/1" element={<UserAccountpage />} />
        <Route path="/user/1/user-req" element={<UserRequirmentspage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
