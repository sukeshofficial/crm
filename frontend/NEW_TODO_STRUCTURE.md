# New To-Do Modal – Folder Structure

```
frontend/src/
├── components/
│   ├── ui/
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   ├── checkbox.jsx
│   │   ├── select.jsx
│   │   ├── button.jsx
│   │   └── label.jsx
│   └── todo/
│       ├── NewTodoModal.jsx
│       └── NewTodoButton.jsx
├── data/
│   └── mockUsers.js
└── pages/
    ├── Dashboard.jsx          # TodoPanel uses NewTodoButton
    └── NewTodoExample.jsx     # Standalone example
```

## Example usage

**With NewTodoButton (uncontrolled):**
```jsx
import { NewTodoButton } from "@/components/todo/NewTodoButton"

<NewTodoButton />
```

**Controlled modal:**
```jsx
import { useState } from "react"
import { NewTodoModal } from "@/components/todo/NewTodoModal"
import { Button } from "@/components/ui/button"

function MyPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>New To-Do</Button>
      <NewTodoModal open={open} onOpenChange={setOpen} />
    </>
  )
}
```
