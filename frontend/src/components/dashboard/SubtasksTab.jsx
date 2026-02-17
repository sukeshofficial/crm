import { useState } from "react";
import {
  GripVertical,
  Trash2,
  Plus,
  Calendar,
  UserX,
  Clock,
  Info,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function SubtasksTab() {
  const [workflowEnabled, setWorkflowEnabled] = useState(false);
  const [subtasks, setSubtasks] = useState([
    {
      id: 1,
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
    {
      id: 2,
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
    {
      id: 3,
      title: "Title",
      description: "Description",
      dueDate: null,
      targetDate: null,
      users: [],
    },
  ]);

  const addSubtask = () => {
    setSubtasks([
      ...subtasks,
      {
        id: Date.now(),
        title: "",
        description: "",
        dueDate: null,
        targetDate: null,
        users: [],
      },
    ]);
  };

  const removeSubtask = (id) => {
    setSubtasks(subtasks.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Update Subtasks
          </h2>
          <div className="flex items-center gap-2 relative group">
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
            <div className="relative">
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-10 text-center pointer-events-none">
                Once a subtask is completed, the next one will be automatically
                generated.
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Save
        </button>
      </div>

      <div className="space-y-4">
        {subtasks.map((task) => (
          <div
            key={task.id}
            className="flex gap-4 p-4 rounded-xl bg-emerald-50/30 border border-emerald-100/50 group"
          >
            <div className="pt-2">
              <button className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing">
                <GripVertical className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium select-none">
                  =
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full h-10 pl-8 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 text-sm"
                  defaultValue={task.title === "Title" ? "" : task.title}
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400 font-medium select-none">
                  =
                </div>
                <textarea
                  placeholder="Description"
                  rows={2}
                  className="w-full py-2 pl-8 pr-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400 text-sm resize-none"
                  defaultValue={
                    task.description === "Description" ? "" : task.description
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 min-w-[140px]">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-500 hover:bg-gray-50 text-xs font-medium bg-white">
                <Calendar className="h-3.5 w-3.5" />
                No Due Date
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-500 hover:bg-gray-50 text-xs font-medium bg-white">
                <Clock className="h-3.5 w-3.5" />
                No Target Date
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-500 hover:bg-gray-50 text-xs font-medium bg-white">
                <UserX className="h-3.5 w-3.5" />
                No Users
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => removeSubtask(task.id)}
                className="h-8 w-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                title="Delete Subtask"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={addSubtask}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Subtask
        </button>
      </div>
    </div>
  );
}
