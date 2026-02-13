import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { UsersHeader } from "@/components/users/UsersHeader"
import { UsersSearch } from "@/components/users/UsersSearch"
import { UsersTable } from "@/components/users/UsersTable"
import { mockUsers } from "@/mock/mockUsers"

export function UsersPage() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = useMemo(() => {
        if (!searchTerm) return mockUsers

        const lowercasedSearch = searchTerm.toLowerCase()
        return mockUsers.filter(
            (user) =>
                user.name.toLowerCase().includes(lowercasedSearch) ||
                user.role.toLowerCase().includes(lowercasedSearch) ||
                user.email.toLowerCase().includes(lowercasedSearch) ||
                user.username.toLowerCase().includes(lowercasedSearch)
        )
    }, [searchTerm])

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="mx-auto max-w-[1600px]">
                        <UsersHeader onNewClick={() => navigate("/users/new")} />
                        <UsersSearch
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                        />
                        <UsersTable users={filteredUsers} />
                    </div>
                </main>
            </div>
        </div>
    )
}
