import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Sumate from "./pages/Sumate";
import Nosotros from "./pages/Nosotros";
import Apoya from "./pages/Apoya";
import Cempaqui from "./pages/Cempaqui";
import InteresCempaqui from "./pages/InteresCempaqui";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sumate"
          element={<Sumate />}
        />

        <Route
          path="/nosotros"
          element={<Nosotros />}
        />

        <Route
          path="/apoya"
          element={<Apoya />}
        />

        <Route
          path="/cempaqui"
          element={<Cempaqui />}
        />

        <Route
          path="/cem-paqui/interes"
          element={<InteresCempaqui />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;