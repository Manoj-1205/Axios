import "./App.css";
import Get from "./Components/axios/get";
import LoginForm from "./Components/LoginForm";
import Main from "./Components/Main";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/api" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
