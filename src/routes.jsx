import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import NotFound from "./pages/NotFound";

function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
