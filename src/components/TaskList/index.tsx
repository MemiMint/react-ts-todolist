import { FC } from "react";
import { Box, Typography, Button, MenuButton, Menu, MenuItem, Dropdown, IconButton, Stack } from "@mui/joy";
import { FaPlus } from "react-icons/fa6";
import { Task } from "../Task";
import { IProps } from "./IProps";
import { useTaskList } from "./hook";
import { HiDotsVertical } from "react-icons/hi";
import { useMutation, useQuery } from "@apollo/client";
import { TASKS } from "../../graphql/tasks";
import { NewTaskModal } from "../NewTaskModal";
import { CREATE_TASK } from "../../graphql/create-task";
import { Task as ITask} from "../../types/task";
import { UPDATE_TASK } from "../../graphql/update-task";
import { DELETE_TASK } from "../../graphql/delete-task";

type AddTaskProps = {
    onClick: () => void;
}

const AddTask: FC<AddTaskProps> = (props): JSX.Element => {
    return (
        <Box pt={2} width="100%" display="flex" alignItems="center" justifyContent="flex-end">
            <Button onClick={props.onClick} variant="soft" color="primary" size="sm" startDecorator={(
                <FaPlus />
            )}>
                Add Task
            </Button>
        </Box>
    )
}

export const TaskList: FC<IProps> = (props): JSX.Element => {
    const { onOpenNewTask, openWithId, openNewTask, onClose, taskId } = useTaskList();

    const { data, loading } = useQuery(TASKS, { variables: { boardId: props.id } });

    const [onUpdateTask] = useMutation(UPDATE_TASK, {
        refetchQueries: [
            TASKS,
            "TASKS"
        ]
    })
    
    const [onCreateTask] = useMutation(CREATE_TASK, {
        refetchQueries: [
            TASKS,
            "TASKS"
        ]
    });

    const [onDelete] = useMutation(DELETE_TASK, {
        refetchQueries: [
            TASKS,
            "TASKS"
        ]
    })

    if (loading) {
        return <p>loading...</p>
    }


    return (
        <Box width={360} height="100%" bgcolor="#005EFF" p={2} borderRadius={6}>
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" >
                <Typography sx={{ color: "white", fontSize: 18, fontWeight: "bold" }} >
                    {props.title}
                </Typography>
                <Dropdown
                    slots={{ root: IconButton }}
                >
                    <MenuButton sx={{ bgcolor: "white" }} >
                        <HiDotsVertical size={18} color="#005EFF" />
                    </MenuButton>
                    <Menu>
                        <MenuItem onClick={() => props.onDelete(props.id)} >Delete board</MenuItem>
                    </Menu>
                </Dropdown>
            </Box>
            <Stack direction="column" gap={2} mt={2}>
                {
                    data && data.tasks.map((task: ITask, index: number) => {
                        return (
                            <Task
                                onClick={() => openWithId(task._id)} 
                                _id={task._id}
                                description={task.description}
                                title={task.title}
                                risk={task.risk}
                                status={task.status}
                                tags={task.tags}
                                key={index}
                            />
                        )
                    })
                }
            </Stack>
            <AddTask onClick={onOpenNewTask} />
            <NewTaskModal
                id={taskId}
                onDelete={async () => {
                    await onDelete({
                        variables: {
                            id: taskId
                        }
                    })
                }}
                onClick={async (
                    title,
                    tags,
                    status,
                    risk,
                    description
                ) => {
                    if (taskId) {
                        await onUpdateTask({
                            variables: {
                                id: taskId,
                                taskInput: {
                                    board_id: props.id,
                                    title,
                                    tags,
                                    status,
                                    risk,
                                    description
                                }
                            }
                        })

                        return
                    }

                    onCreateTask({
                        variables: {
                            taskInput: {
                                board_id: props.id,
                                title,
                                description,
                                status,
                                risk,
                                tags
                            }
                        }
                    })
                }}
                open={openNewTask} 
                onClose={onClose} />
        </Box>
    )
}