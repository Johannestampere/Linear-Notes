"use client"
import Link from 'next/link';
import About from '../dashboard/about/page';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
    // Get the current user session
    const { data: session } = useSession();
    const router = useRouter();

    const [folderName, setFolderName] = useState("");

    const handleCreateFolder = async () => {
        if (!session) {
            redirect("/");
            return null;
        }

        try {
            const response = await fetch("/api/new-folder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    nameFrontend: folderName, 
                    ownerFrontend: session.user.email,
                    parentFrontend: null,
                }),
            });
        
            if (response.ok) {
                const data = await response.json();
                router.push("/dashboard");
            } else {
                console.error('Failed to create folder');
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Link href="/dashboard">
                Logo
            </Link>
            
            <input 
                type="text" 
                value={folderName} 
                onChange={(e) => setFolderName(e.target.value)} 
                placeholder="New folder name"
            />
            <button onClick={handleCreateFolder}>+</button>
            <div>Recents</div>
            <Link href="/dashboard/about">
                About
            </Link>
        </div>
    )
}