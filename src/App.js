import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Farm from "./components/Granja/Farm";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
