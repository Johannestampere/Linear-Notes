// This file tracks the user's current folder
// using React Context
// we need to do this to know create a new file or
// folder in the correct location in the db

import { createContext, useContext, useState } from 'react';

const FolderContext = createContext();

export function FolderProvider({ children }) {
    const [currentFolder, setCurrentFolder] = useState(null);

    return (
        <FolderContext.Provider value={{ currentFolder, setCurrentFolder }}>
            {children}
        </FolderContext.Provider>
    );
}

export const useFolder = () => useContext(FolderContext);