import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockUsers } from "@/data/mockUsers"
import { X } from "lucide-react"

const schema = z
  .object({
    title: z.string().min(1, "To-Do title is required"),
    details: z.string().optional(),
    setDueDate: z.boolean().default(false),
    dueDate: z.string().optional(),
    assignToUser: z.boolean().default(true),
    userId: z.string().optional(),
  })
  .refine(
    (data) =>
      !data.assignToUser || (data.assignToUser && (data.userId ?? "").trim()),
    { message: "Please select a user", path: ["userId"] }
  )

export function NewTodoModal({ open, onOpenChange }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      details: "",
      setDueDate: false,
      assignToUser: true,
      userId: "",
    },
    mode: "onChange",
  })

  const setDueDateChecked = watch("setDueDate")
  const assignToUserChecked = watch("assignToUser")

  const handleOpenChange = (nextOpen) => {
    if (!nextOpen) reset()
    onOpenChange?.(nextOpen)
  }

  const onSubmit = (data) => {
    const payload = {
      title: data.title,
      details: data.details || "",
      dueDate: data.setDueDate ? data.dueDate : null,
      userId: data.assignToUser ? data.userId : null,
    }
    console.log("New To-Do submitted:", payload)
    handleOpenChange(false)
    reset()
  }

  const canSave =
    watch("title")?.trim() &&
    (!assignToUserChecked || (assignToUserChecked && watch("userId")))

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle>New To-Do</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
            onClick={() => handleOpenChange(false)}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="title">
              To-Do <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Enter to-do title"
              {...register("title")}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Details</Label>
            <Textarea
              id="details"
              placeholder="Add details (optional)"
              rows={3}
              {...register("details")}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="setDueDate"
              checked={setDueDateChecked}
              onCheckedChange={(checked) => setValue("setDueDate", !!checked)}
            />
            <Label
              htmlFor="setDueDate"
              className="text-sm font-normal cursor-pointer"
            >
              Set due date
            </Label>
          </div>
          {setDueDateChecked && (
            <div className="space-y-2 pl-6">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                {...register("dueDate")}
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="assignToUser"
              checked={assignToUserChecked}
              onCheckedChange={(checked) => {
                setValue("assignToUser", !!checked)
                if (!checked) setValue("userId", "")
              }}
            />
            <Label
              htmlFor="assignToUser"
              className="text-sm font-normal cursor-pointer"
            >
              Assign to user
            </Label>
          </div>
          {assignToUserChecked && (
            <div className="space-y-2 pl-6">
              <Label htmlFor="userId">
                Select User <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="userId"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => field.onChange(v)}
                  >
                    <SelectTrigger
                      id="userId"
                      className={errors.userId ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select a user" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockUsers.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.userId && (
                <p className="text-xs text-red-500">{errors.userId.message}</p>
              )}
            </div>
          )}
          <DialogFooter className="flex flex-row gap-2 pt-4 sm:justify-start">
            <Button type="submit" disabled={!canSave}>
              Save
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
