import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Eye, EyeOff } from "lucide-react"
import { mockRoles } from "@/mock/mockRoles"

export function UserFormFields({ register, errors, watch, setValue }) {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="name">
                    Name <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter full name"
                />
                {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="username">
                    Username <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="username"
                    {...register("username", { required: "Username is required" })}
                    placeholder="Enter username"
                />
                {errors.username && (
                    <p className="text-sm text-red-600">{errors.username.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="mobile">Mobile</Label>
                <Input
                    id="mobile"
                    {...register("mobile")}
                    placeholder="Enter mobile number"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter email address"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        placeholder="Enter password"
                        className="pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">
                    Confirm Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                    <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                        placeholder="Confirm password"
                        className="pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="text-sm text-red-600">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="role">
                    Role <span className="text-red-500">*</span>
                </Label>
                <Select
                    value={watch("role")}
                    onValueChange={(value) => setValue("role", value)}
                >
                    <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockRoles.map((role) => (
                            <SelectItem key={role.id} value={role.value}>
                                {role.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {errors.role && (
                    <p className="text-sm text-red-600">{errors.role.message}</p>
                )}
                <p className="text-sm text-gray-500">
                    To create custom user roles go to Settings &gt; User Roles
                </p>
            </div>

            <div className="flex items-center justify-between py-2">
                <Label htmlFor="isActive">Is Active?</Label>
                <Switch
                    id="isActive"
                    checked={watch("isActive")}
                    onCheckedChange={(checked) => setValue("isActive", checked)}
                />
            </div>
        </div>
    )
}
