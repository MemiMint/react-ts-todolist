import { useState } from "react";

export const useProject = () => {
    const [openNewBoardDialog, setOpenNewBoardDialog] = useState<boolean>(false);
    const onToggleOpenDialog = () => setOpenNewBoardDialog(!openNewBoardDialog);


    return {
        openNewBoardDialog,
        onToggleOpenDialog,
    }
}