import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

export function ServiceDetailHeader({ serviceName, serviceId }) {
  const navigate = useNavigate();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    console.log("Deleting service:", serviceId, serviceName);
    setShowDeleteDialog(false);
    navigate("/services");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => navigate("/services")}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors mr-1"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>

          <span
            className="text-blue-600 hover:underline cursor-pointer font-medium"
            onClick={() => navigate("/services")}
          >
            Services
          </span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-semibold text-lg">
            {serviceName}
          </span>
        </div>

        <button
          onClick={() => setShowDeleteDialog(true)}
          className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors font-medium text-sm"
        >
          Delete
        </button>
      </div>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the
              service "{serviceName}" and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setShowDeleteDialog(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
