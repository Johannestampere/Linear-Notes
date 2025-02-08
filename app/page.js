"use client"
import { useRouter } from "next/navigation"
import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react"

const HomePage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
  }, [session, router])

  if (session) {
    return null // Render nothing while redirecting
  }

  return (
    <div>
      <h1>Welcome to my linalg note taking app</h1>
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  )
}

export default HomePage
