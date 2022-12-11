import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/UIComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="bg-primary-800 text-primary-100 min-h-screen px-2 font-primary">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
