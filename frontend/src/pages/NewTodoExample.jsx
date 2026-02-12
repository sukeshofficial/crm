import { useState } from "react"
import { NewTodoModal } from "@/components/todo/NewTodoModal"
import { NewTodoButton } from "@/components/todo/NewTodoButton"
import { Button } from "@/components/ui/button"

export function NewTodoExample() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold mb-4">New To-Do Example</h1>
      <div className="flex gap-4">
        <NewTodoButton />
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Modal (controlled)
        </Button>
      </div>
      <NewTodoModal open={open} onOpenChange={setOpen} />
    </div>
  )
}
