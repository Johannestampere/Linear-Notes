"use client"
import { useRouter } from "next/navigation"
import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react"

const HomePage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      handleSignIn()
    }
  }, [session, router])

  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/new-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: session.user.email, 
          name: session.user.name, 
          id: session.user.id 
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        router.push("/dashboard");
      } else {
        console.error('Failed to create/fetch user');
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  
  if (session) {
    return null
  }

  return (
    <div>
      <h1>Welcome to my linalg note taking app</h1>
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  )
}

export default HomePage
