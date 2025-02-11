import Link from 'next/link';
import About from '../dashboard/about/page';

export default function Navbar() {
    const handleCreateFile = async () => {
        try {
            const response = await fetch("/api/new-file", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    name: "New file", 
                    content: "Write something here", 
                    user: session.user.id 
                }),
            });
        
            if (response.ok) {
                const data = await response.json();
                router.push("/dashboard");
            } else {
                console.error('Failed to create file');
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Link href="/dashboard">
                Logo
            </Link>
            
            <button>+</button>
            <div>Recents</div>
            <Link href="/dashboard/about">
                About
            </Link>
        </div>
    )
}