import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { ComplianceCalendarPage } from "./pages/compliance/ComplianceCalendarPage"
import { UsersPage } from "./pages/users/UsersPage"
import { NewUserPage } from "./pages/users/NewUserPage"
import { ServicesPage } from "./pages/services/ServicesPage"
import { NewServicePage } from "./pages/services/NewServicePage"
import { ServiceDetailPage } from "./pages/services/ServiceDetailPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compliance-calendar" element={<ComplianceCalendarPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/new" element={<NewUserPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/new" element={<NewServicePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
