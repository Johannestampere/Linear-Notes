"use client"
import Link from 'next/link';
import About from '../dashboard/about/page';
import { redirect, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useFolder } from '@/app/context/folderContext.js';
import { useState } from 'react';

export default function Navbar() {
    // Get the current user session
    const { data: session } = useSession();

    const router = useRouter();

    // Get the current folder id
    const { currentFolder } = useFolder();

    const [fileName, setFileName] = useState("");

    const handleCreateFile = async () => {
    
        if (!session) {
            return null;
            redirect("/");
        }

        if (!fileName) {
            alert("Please enter a file name");
        }

        try {
            const response = await fetch("/api/new-file", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    name: "Gotta get this from input", 
                    content: [], 
                    owner: session.user.email,
                    parent: currentFolder,
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
            
            <button onClick={ handleCreateFile }>+</button>
            <div>Recents</div>
            <Link href="/dashboard/about">
                About
            </Link>
        </div>
    )
}