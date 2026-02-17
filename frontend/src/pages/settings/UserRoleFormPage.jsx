import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Permission Helpers
const createScope = (enabled = false, scope = "Everything") => ({
  enabled,
  scope,
});
const SCOPE_OPTIONS = ["Everything", "Self Only", "Assigned Only"];

const INITIAL_PERMISSIONS = {
  client: {
    create_client: { enabled: true, hasScope: false },
    edit_clients: { enabled: true, hasScope: true, scope: "Everything" },
    view_clients: { enabled: true, hasScope: true, scope: "Self Only" },
    delete_clients: { enabled: false, hasScope: true, scope: "Everything" },
    view_client_ledger: { enabled: false, hasScope: false },
    manage_client_packages: {
      enabled: false,
      hasScope: true,
      scope: "Everything",
    },
    view_client_packages: {
      enabled: false,
      hasScope: true,
      scope: "Everything",
    },
  },
  task: {
    create_task: { enabled: true, hasScope: true, scope: "Everything" },
    edit_tasks: { enabled: true, hasScope: true, scope: "Everything" },
    view_tasks: { enabled: true, hasScope: true, scope: "Self Only" },
    delete_tasks: { enabled: false, hasScope: true, scope: "Everything" },
    update_task_checklist: { enabled: false, hasScope: false },
    verify_tasks: { enabled: false, hasScope: false },
    assign_tasks_to_other_users: { enabled: true, hasScope: false },
    add_or_update_time_log_manually: { enabled: true, hasScope: false },
    delete_note: { enabled: true, hasScope: false },
  },
  invoice_receipt_quotation: {
    create: { enabled: false, hasScope: true, scope: "Everything" },
    edit: { enabled: false, hasScope: true, scope: "Everything" },
    view: { enabled: true, hasScope: true, scope: "Everything" },
    delete: { enabled: false, hasScope: true, scope: "Everything" },
  },
  expense: {
    create_expense: { enabled: true, hasScope: false },
    edit_expense: { enabled: true, hasScope: false },
    view_expense: { enabled: true, hasScope: false },
    delete_expense: { enabled: false, hasScope: false },
  },
  doc_in_out_reg_dsc: {
    create: { enabled: true, hasScope: false },
    edit: { enabled: true, hasScope: false },
    view: { enabled: true, hasScope: false },
    delete: { enabled: false, hasScope: false },
  },
  attendance: {
    mark_attendance: { enabled: true, hasScope: true, scope: "Self Only" },
    mark_past_future_attendance: { enabled: false, hasScope: false },
  },
  todo: {
    assign_todo_to_other_users: { enabled: false, hasScope: false },
  },
  settings: {
    manage_masters: { enabled: false, hasScope: false },
  },
  reports: {
    tasks_report: { enabled: false, hasScope: true, scope: "All Tasks" },
    services_report: { enabled: false, hasScope: false },
    clients_report: { enabled: false, hasScope: true, scope: "All Clients" },
    passwords_report: { enabled: false, hasScope: true, scope: "All Clients" },
    dsc_report: { enabled: false, hasScope: true, scope: "All Clients" },
    invoices_report: { enabled: false, hasScope: true, scope: "All Clients" },
    receipts_report: { enabled: false, hasScope: true, scope: "All Clients" },
  },
  others: {
    send_notifications: { enabled: false, hasScope: false },
    export_data: { enabled: true, hasScope: false },
    disable_two_factor_authentication: { enabled: true, hasScope: false },
  },
};

const PermissionRow = ({ label, field, section, state, onChange }) => {
  const permission = state[section][field];
  const { enabled, hasScope, scope } = permission;

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id={`${section}-${field}`}
          checked={enabled}
          onCheckedChange={(checked) =>
            onChange(section, field, "enabled", checked)
          }
        />
        <Label
          htmlFor={`${section}-${field}`}
          className="text-sm font-normal text-gray-700 cursor-pointer"
        >
          {label}
        </Label>
      </div>
      {hasScope && (
        <Select
          disabled={!enabled}
          value={scope}
          onValueChange={(val) => onChange(section, field, "scope", val)}
        >
          <SelectTrigger className="w-[140px] h-8 text-xs bg-white">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {SCOPE_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export function UserRoleFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);

  useEffect(() => {
    if (isEditMode) {
      // Simulate fetching data
      setRoleName("Employee");
      // In a real app, merge fetched permissions with INITIAL_PERMISSIONS to ensure structure
    }
  }, [isEditMode]);

  const handlePermissionChange = (section, field, property, value) => {
    setPermissions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: {
          ...prev[section][field],
          [property]: value,
        },
      },
    }));
  };

  const handleSave = () => {
    const payload = {
      roleName,
      permissions,
    };
    console.log("Saving Role:", payload);
    alert("Role Saved Successfully");
    navigate("/settings/roles");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      console.log("Deleting Role:", id);
      navigate("/settings/roles");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 pb-20">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <div className="flex items-center gap-2 text-gray-600">
            <span
              className="cursor-pointer hover:text-gray-900"
              onClick={() => navigate("/settings/roles")}
            >
              User Roles
            </span>
            <span className="text-gray-400">&gt;</span>
            <span className="font-semibold text-gray-900">
              {isEditMode ? "Edit User Role" : "New User Role"}
            </span>
          </div>
        </div>
        {isEditMode && (
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </div>

      {/* Role Name */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="max-w-md flex items-center gap-4">
          <Label htmlFor="roleName" className="w-24 shrink-0 text-gray-700">
            Role Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="roleName"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="max-w-lg bg-white"
          />
        </div>
      </div>

      {/* Permissions Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Client */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Client</h3>
          <PermissionRow
            label="Create client"
            field="create_client"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Edit clients"
            field="edit_clients"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View clients"
            field="view_clients"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete clients"
            field="delete_clients"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View client ledger"
            field="view_client_ledger"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Manage Client Packages"
            field="manage_client_packages"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View Client Packages"
            field="view_client_packages"
            section="client"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Task */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Task</h3>
          <PermissionRow
            label="Create task"
            field="create_task"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Edit tasks"
            field="edit_tasks"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View tasks"
            field="view_tasks"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete tasks"
            field="delete_tasks"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Update Task Checklist"
            field="update_task_checklist"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Verify tasks"
            field="verify_tasks"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Assign tasks to other users"
            field="assign_tasks_to_other_users"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Add or Update Time Log Manually"
            field="add_or_update_time_log_manually"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete Note"
            field="delete_note"
            section="task"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Invoice/Receipt/Quotation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Invoice/Receipt/Quotation
          </h3>
          <PermissionRow
            label="Create invoice/receipt/quotation"
            field="create"
            section="invoice_receipt_quotation"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Edit invoice/receipt/quotation"
            field="edit"
            section="invoice_receipt_quotation"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View invoice/receipt/quotation"
            field="view"
            section="invoice_receipt_quotation"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete invoice/receipt/quotation"
            field="delete"
            section="invoice_receipt_quotation"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Expense */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Expense</h3>
          <PermissionRow
            label="Create expense"
            field="create_expense"
            section="expense"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Edit expense"
            field="edit_expense"
            section="expense"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View expense"
            field="view_expense"
            section="expense"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete expense"
            field="delete_expense"
            section="expense"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Doc. In-Out Reg / DSC */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Doc. In-Out Reg / DSC
          </h3>
          <PermissionRow
            label="Create"
            field="create"
            section="doc_in_out_reg_dsc"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Edit"
            field="edit"
            section="doc_in_out_reg_dsc"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="View"
            field="view"
            section="doc_in_out_reg_dsc"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Delete"
            field="delete"
            section="doc_in_out_reg_dsc"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Attendance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Attendance
          </h3>
          <PermissionRow
            label="Mark attendance"
            field="mark_attendance"
            section="attendance"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Mark past/future attendance"
            field="mark_past_future_attendance"
            section="attendance"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* To-Do & Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">To-Do</h3>
            <PermissionRow
              label="Assign to-do to other users"
              field="assign_todo_to_other_users"
              section="todo"
              state={permissions}
              onChange={handlePermissionChange}
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Settings
            </h3>
            <PermissionRow
              label="Manage Masters"
              field="manage_masters"
              section="settings"
              state={permissions}
              onChange={handlePermissionChange}
            />
          </div>
        </div>

        {/* Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Reports</h3>
          <PermissionRow
            label="Tasks Report"
            field="tasks_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Services Report"
            field="services_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Clients Report"
            field="clients_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Passwords Report"
            field="passwords_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="DSC Report"
            field="dsc_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Invoices Report"
            field="invoices_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Receipts Report"
            field="receipts_report"
            section="reports"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>

        {/* Others */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Others</h3>
          <PermissionRow
            label="Send Notifications"
            field="send_notifications"
            section="others"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Export Data"
            field="export_data"
            section="others"
            state={permissions}
            onChange={handlePermissionChange}
          />
          <PermissionRow
            label="Disable two-factor authentication"
            field="disable_two_factor_authentication"
            section="others"
            state={permissions}
            onChange={handlePermissionChange}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end fixed bottom-6 right-6">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white min-w-[100px] shadow-lg"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
