import { useState, useRef } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export function ImportServicesModal({ open, onOpenChange }) {
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const file = e.dataTransfer.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleImport = () => {
        console.log("Selected file:", selectedFile)
        setSelectedFile(null)
        onOpenChange(false)
    }

    const handleCancel = () => {
        setSelectedFile(null)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Import Services</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <p className="text-sm text-gray-600">
                        Download the sample Excel file and prepare an upload file below the excel file
                        according to the guidelines mentioned in the sample excel file.
                    </p>
                    <a
                        href="#"
                        className="text-sm text-blue-600 hover:underline inline-block"
                    >
                        Download sample file
                    </a>
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors bg-gray-50"
                    >
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 mb-1">
                            Drop file here or click to upload
                        </p>
                        {selectedFile && (
                            <p className="text-sm text-blue-600 font-medium mt-2">
                                {selectedFile.name}
                            </p>
                        )}
                    </div>
                    <p className="text-xs text-gray-500">
                        Maximum file size: 2 MB | File type: CSV or XLS
                    </p>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv,.xls,.xlsx"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleImport} disabled={!selectedFile}>
                        Import
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
