import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { SiteLayout } from "./components/site/SiteLayout";
import { getBasename } from "./utils/Functions";
import Home from "./pages/Home.tsx";

const App = () => (
  <BrowserRouter basename={getBasename() || undefined}>
    <ScrollToTop />
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
