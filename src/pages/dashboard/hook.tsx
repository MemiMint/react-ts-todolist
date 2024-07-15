import { useState } from "react";

export const useDashboard = () => {
    const [openNewProjectDialog, setOpenNewProjectDialog] = useState<boolean>(false);

    const onToggleOpenDialog = () => setOpenNewProjectDialog(!openNewProjectDialog);

    return {
        openNewProjectDialog,
        onToggleOpenDialog,
    }
}