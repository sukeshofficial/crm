import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserBreadcrumbHeader } from "@/components/users/UserBreadcrumbHeader"
import { UserPhotoUpload } from "@/components/users/UserPhotoUpload"
import { UserFormFields } from "@/components/users/UserFormFields"

export function NewUserPage() {
    const navigate = useNavigate()
    const [photo, setPhoto] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm({
        defaultValues: {
            name: "",
            username: "",
            mobile: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            isActive: true,
        },
    })

    const onSubmit = (data) => {
        const formData = {
            ...data,
            photo,
        }
        console.log("Form Data:", formData)
        navigate("/users")
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="mx-auto max-w-[800px]">
                        <UserBreadcrumbHeader />
                        <Card className="p-6 md:p-8 rounded-xl shadow-sm">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <UserPhotoUpload value={photo} onChange={setPhoto} />
                                <UserFormFields
                                    register={register}
                                    errors={errors}
                                    watch={watch}
                                    setValue={setValue}
                                />
                                <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => navigate("/users")}
                                    >
                                        Cancel
                                    </Button>
                                    <Button type="submit">Save User</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}
