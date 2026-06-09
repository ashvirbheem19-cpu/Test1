import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Dummy1 from "@/pages/Dummy1"
import Dummy2 from "@/pages/Dummy2"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dummy1" element={<Dummy1 />} />
        <Route path="/dummy2" element={<Dummy2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
