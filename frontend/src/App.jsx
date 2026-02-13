import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { ComplianceCalendarPage } from "./pages/compliance/ComplianceCalendarPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compliance-calendar" element={<ComplianceCalendarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
