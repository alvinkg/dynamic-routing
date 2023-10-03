
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonPage from "./PersonPage";
import HomePage from "./HomePage";
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/person/:personId" element={<PersonPage/>} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
