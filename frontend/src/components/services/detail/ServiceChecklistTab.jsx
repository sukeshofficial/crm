import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { GripVertical, Trash2, Plus } from "lucide-react";

export function ServiceChecklistTab() {
  // Initial state matching requirements: ["Challan", "2", "3", "4", "5"]
  // Converting to objects for better handling in React list
  const [steps, setSteps] = useState([
    { id: "1", text: "Challan" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
  ]);

  const handleAddStep = () => {
    const newId = Date.now().toString();
    setSteps([...steps, { id: newId, text: "" }]);
  };

  const handleDeleteStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  const handleStepChange = (id, newText) => {
    setSteps(
      steps.map((step) => (step.id === id ? { ...step, text: newText } : step)),
    );
  };

  const handleSave = () => {
    // Requirement: Add Save handler that prints checklist array to console
    // Converting back to simple array of strings as per probable backend expectation or keep as objects?
    // Prompt says "prints checklist array to console". Default was ["Challan"...].
    const plainArray = steps.map((s) => s.text);
    console.log("Saving checklist:", plainArray);
  };

  return (
    <Card className="rounded-xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b">
        <CardTitle className="text-lg font-medium">Update Checklist</CardTitle>
        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Save
        </Button>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-3 group">
              <span className="cursor-grab text-gray-400 hover:text-gray-600">
                <GripVertical className="w-5 h-5" />
              </span>

              <Input
                value={step.text}
                onChange={(e) => handleStepChange(step.id, e.target.value)}
                className="flex-1 bg-white"
                placeholder="Step description"
              />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteStep(step.id)}
                className="bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 h-10 w-10 shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={handleAddStep}
            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Step
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
