import Navbar from "../components/Navbar"
import { FolderProvider } from "../context/folderContext"

export default function Layout({ children }) {
    return (
        <FolderProvider>
            <div>
                <Navbar />
                {children}
            </div>
        </FolderProvider>
    )
}