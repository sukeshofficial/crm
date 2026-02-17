import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Trash2, Plus, GripVertical } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

export function ServiceCustomFieldsTab() {
  const [fields, setFields] = useState([{ id: "1", name: "", type: "text" }]);

  const handleAddField = () => {
    setFields([
      ...fields,
      { id: Date.now().toString(), name: "", type: "text" },
    ]);
  };

  const handleDeleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  const handleUpdateField = (id, key, value) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  const handleSave = () => {
    console.log("Saving custom fields:", fields);
  };

  return (
    <Card className="rounded-xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b">
        <CardTitle className="text-lg font-medium">
          Custom Fields Configuration
        </CardTitle>
        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Save
        </Button>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          {fields.map((field) => (
            <div
              key={field.id}
              className="flex gap-4 items-center group bg-gray-50/50 p-3 rounded-lg border border-gray-100"
            >
              <GripVertical className="w-5 h-5 text-gray-400 cursor-grab" />

              <div className="flex-1">
                <Input
                  placeholder="Field Name"
                  value={field.name}
                  onChange={(e) =>
                    handleUpdateField(field.id, "name", e.target.value)
                  }
                  className="bg-white"
                />
              </div>

              <div className="w-48">
                <Select
                  value={field.type}
                  onValueChange={(val) =>
                    handleUpdateField(field.id, "type", val)
                  }
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="boolean">Yes/No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteField(field.id)}
                className="bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 h-10 w-10 shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={handleAddField}
            className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Custom Field
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
