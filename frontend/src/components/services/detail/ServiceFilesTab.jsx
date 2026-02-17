import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { UploadCloud, FileText, Trash2, Download } from "lucide-react";

export function ServiceFilesTab() {
  const [files, setFiles] = useState([
    {
      id: "1",
      name: "Service_Agreement.pdf",
      size: "2.4 MB",
      date: "2024-02-15",
    },
    { id: "2", name: "Guidelines.docx", size: "1.1 MB", date: "2024-02-10" },
  ]);

  const handleUpload = () => {
    // Mock upload
    const newFile = {
      id: Date.now().toString(),
      name: `New_Upload_${files.length + 1}.pdf`,
      size: "0.5 MB",
      date: new Date().toISOString().split("T")[0],
    };
    setFiles([...files, newFile]);
    console.log("Uploaded file:", newFile.name);
  };

  const handleDeleteFile = (id) => {
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <Card className="rounded-xl border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between py-4 px-6 border-b">
        <CardTitle className="text-lg font-medium">Supporting Files</CardTitle>
        <Button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <UploadCloud className="w-4 h-4 mr-2" />
          Upload File
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        {files.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50">
            <UploadCloud className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-medium">No files uploaded yet</p>
            <p className="text-xs text-gray-400 mt-1">
              Upload documents relevant to this service
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-blue-100 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {file.name}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                      <span>{file.size}</span>
                      <span>•</span>
                      <span>{file.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-400 hover:text-blue-600"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteFile(file.id)}
                    className="h-8 w-8 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
