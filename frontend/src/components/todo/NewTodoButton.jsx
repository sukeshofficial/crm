import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NewTodoModal } from "./NewTodoModal"
import { Plus } from "lucide-react"

export function NewTodoButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} size="sm" className="gap-1.5">
        <Plus className="h-4 w-4" />
        New To-Do
      </Button>
      <NewTodoModal open={open} onOpenChange={setOpen} />
    </>
  )
}
