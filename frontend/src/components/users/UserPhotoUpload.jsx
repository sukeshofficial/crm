import { useState, useRef } from "react"
import { Label } from "@/components/ui/label"
import { ImageIcon, Pencil } from "lucide-react"

export function UserPhotoUpload({ value, onChange }) {
    const [preview, setPreview] = useState(value || null)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result)
                onChange?.(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="flex flex-col items-center gap-3 mb-6">
            <Label className="text-sm font-medium">Photo</Label>
            <div className="relative">
                <button
                    type="button"
                    onClick={handleClick}
                    className="relative h-32 w-32 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors flex items-center justify-center bg-gray-50 overflow-hidden group"
                >
                    {preview ? (
                        <img
                            src={preview}
                            alt="Preview"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                    )}
                </button>
                {preview && (
                    <button
                        type="button"
                        onClick={handleClick}
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        <Pencil className="h-4 w-4" />
                    </button>
                )}
            </div>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
        </div>
    )
}
