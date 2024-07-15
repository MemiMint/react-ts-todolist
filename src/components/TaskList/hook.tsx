import { useState } from "react";

export const useTaskList = () => {
    const [openNewTask, setOpenNewTask] = useState<boolean>(false);
    const [taskId, setTaskId] = useState<string>("");

    const openWithId = (id: string) => {
        setTaskId(id);
        setOpenNewTask(true);
    }

    const onOpenNewTask = () => {
        setOpenNewTask(true);
    }

    const onClose = () => {
        setTaskId("");
        setOpenNewTask(false);
    }

    return {
        openNewTask,
        onClose,
        taskId,
        onOpenNewTask,
        openWithId
    }
}