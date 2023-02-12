import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import mashwinRoute from "./components/gameRoutes/mashwinRoute";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route index path="/" element={<Menu />} />
          <Route path="/mashwinRoute" element={<mashwinRoute />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
