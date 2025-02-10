"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
    const router = useRouter()
    const { data: session } = useSession()

    useEffect(() => {
        if (!session) {
            router.push("/")
        }
    }, [session, router])

    const handleSignOut = async () => {
        await signOut({ redirect: false, callbackUrl: "/" })
        router.push("/")
    }

    if (!session) {
        return null // Render nothing while redirecting
    }

    return (
        <div>
            
            <div>
                <div>Logo</div>
                <button>Create +</button>
                <button>Recents</button>
                <button>About the appč</button>
            </div>
            
            
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard, {session.user.name}</p>
            <div>Session id: {session.sessionId}</div>
            <div>Create file/folder</div>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}
