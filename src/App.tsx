import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Sumate from "./pages/Sumate";
import Proyectos from "./pages/Proyectos";
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
          path="/proyectos"
          element={<Proyectos />}
        />
        <Route
          path="/apoya"
          element={<Apoya />}
        />
        <Route
          path="/Contacto"
          element={<Home />}
        />
        <Route
          path="/Cempaqui"
          element={<Cempaqui />}
        />
        <Route
          path="/cem-paqui/interes"
          element={<InteresCempaqui />}
        />
        <Route
          path="/ProgramsSection"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;