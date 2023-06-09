import SuccessPage from "./pages/sucess"
import Failed from "./pages/failed"
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
function App() {
  return (
    <div className="App">
    
      <Router>
          <Routes>
              <Route path="/" element={<SuccessPage/>}/>
              <Route path="/failed" element={<Failed/>}/>
          </Routes>
    </Router>
    </div>
  );
}

export default App;
