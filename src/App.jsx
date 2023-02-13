import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/UIComponents/Navbar/Navbar"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="bg-gradient-to-bl from-primary-800 to-primary-400 text-primary-100 min-h-screen font-primary">
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
