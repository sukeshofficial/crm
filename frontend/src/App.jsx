import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { ComplianceCalendarPage } from "./pages/compliance/ComplianceCalendarPage";
import { UsersPage } from "./pages/users/UsersPage";
import { NewUserPage } from "./pages/users/NewUserPage";
import { ServicesPage } from "./pages/services/ServicesPage";
import { NewServicePage } from "./pages/services/NewServicePage";
import { ServiceDetailPage } from "./pages/services/ServiceDetailPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ClientsPage } from "./pages/ClientsPage";
import { NewClientPage } from "./pages/NewClientPage";
import { UserRolesPage } from "./pages/settings/UserRolesPage";
import { UserRoleFormPage } from "./pages/settings/UserRoleFormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/compliance-calendar"
          element={<ComplianceCalendarPage />}
        />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/new" element={<NewClientPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/new" element={<NewUserPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/settings/roles" element={<UserRolesPage />} />
        <Route path="/settings/roles/new" element={<UserRoleFormPage />} />
        <Route path="/settings/roles/:id/edit" element={<UserRoleFormPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/users/new" element={<NewUserPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/new" element={<NewServicePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
