import { useState } from "react";
import { GripVertical, Trash2, Plus } from "lucide-react";

export function ChecklistTab() {
  const [steps, setSteps] = useState([
    { id: 1, text: "Challan" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
  ]);

  const addStep = () => {
    setSteps([...steps, { id: Date.now(), text: "" }]);
  };

  const removeStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const updateStep = (id, text) => {
    setSteps(steps.map((step) => (step.id === id ? { ...step, text } : step)));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Update Checklist
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Save
        </button>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3 group">
            <button className="text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing p-1">
              <GripVertical className="h-5 w-5" />
            </button>
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium select-none">
                =
              </div>
              <input
                type="text"
                value={step.text}
                onChange={(e) => updateStep(step.id, e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-700 transition-all placeholder:text-gray-400"
                placeholder="Enter step description"
              />
            </div>
            <button
              onClick={() => removeStep(step.id)}
              className="h-12 w-12 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={addStep}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Step
        </button>
      </div>
    </div>
  );
}
