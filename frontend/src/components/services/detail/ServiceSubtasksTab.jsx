import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import {
  GripVertical,
  Trash2,
  Plus,
  Calendar,
  User,
  Info,
  CheckCircle2,
} from "lucide-react";

export function ServiceSubtasksTab() {
  const [workflowEnabled, setWorkflowEnabled] = useState(false);
  const [subtasks, setSubtasks] = useState([
    {
      id: "1",
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
    {
      id: "2",
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
    {
      id: "3",
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
  ]);

  const handleAddSubtask = () => {
    const newId = Date.now().toString();
    setSubtasks([
      ...subtasks,
      {
        id: newId,
        title: "",
        description: "",
        dueDate: null,
        targetDate: null,
        users: [],
      },
    ]);
  };

  const handleDeleteSubtask = (id) => {
    setSubtasks(subtasks.filter((t) => t.id !== id));
  };

  const handleUpdateSubtask = (id, field, value) => {
    setSubtasks(
      subtasks.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    );
  };

  const handleSave = () => {
    console.log("Saving subtasks:", {
      workflowEnabled,
      subtasks,
    });
  };

  return (
    <Card className="rounded-xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b">
        <div className="flex items-center gap-4">
          <CardTitle className="text-lg font-medium">Update Subtasks</CardTitle>
          <div className="flex items-center gap-2">
            <Switch
              checked={workflowEnabled}
              onCheckedChange={setWorkflowEnabled}
              id="workflow-mode"
            />
            <label
              htmlFor="workflow-mode"
              className="text-sm font-medium text-gray-700 cursor-pointer select-none"
            >
              Enable Workflow
            </label>
            <div className="group relative">
              <Info className="w-4 h-4 text-gray-400 cursor-help" />
              <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64 bg-gray-800 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center">
                Once a subtask is completed, the next one will be automatically
                generated.
                <div className="absolute left-1/2 top-full -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Save
        </Button>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-4">
          {subtasks.map((task) => (
            <div
              key={task.id}
              className="flex gap-4 p-4 bg-gray-50/50 rounded-lg border border-gray-100 group"
            >
              <div className="pt-2">
                <span className="cursor-grab text-gray-400 hover:text-gray-600">
                  <GripVertical className="w-5 h-5" />
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <Input
                  value={task.title}
                  onChange={(e) =>
                    handleUpdateSubtask(task.id, "title", e.target.value)
                  }
                  className="bg-white"
                  placeholder="Title"
                />
                <Textarea
                  value={task.description}
                  onChange={(e) =>
                    handleUpdateSubtask(task.id, "description", e.target.value)
                  }
                  className="bg-white min-h-[60px] resize-y"
                  placeholder="Description"
                />
              </div>

              <div className="flex flex-col gap-2 pt-1 border-l pl-4 border-gray-200">
                <div className="flex items-center gap-2 text-gray-500 text-sm w-36">
                  <Calendar className="w-4 h-4" />
                  <span>No Due Date</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm w-36">
                  <Calendar className="w-4 h-4" />
                  <span>No Target Date</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm w-36">
                  <User className="w-4 h-4" />
                  <span>No Users</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteSubtask(task.id)}
                  className="bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 h-10 w-10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={handleAddSubtask}
            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Subtask
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
