import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import MashwinRoute from "./components/gameRoutes/MashwinRoute";
import StandardRoute from "./components/gameRoutes/StandardRoute";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/mashwinRoute" element={<MashwinRoute />} />
          <Route path="/standardRoute" element={<StandardRoute />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
