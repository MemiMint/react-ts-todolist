import { FC } from "react";
import { Box, Typography, Button } from "@mui/joy";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";
import { TaskList } from "../../components/TaskList";

export const Project: FC = (): JSX.Element => {
    return (
        <Box p={2} >
            <Box width="inherit" bgcolor="#005EFF" display="flex" alignItems="center" justifyContent="space-between" borderRadius={6} p={2} gap={2}>
                <Box display="flex" alignItems="center" gap={2}>
                    <AiOutlineProject size={28} color="white" />
                    <Typography sx={{ color: "white" }} level="h4">Project Name</Typography>
                </Box>
                <Button>Exit</Button>
            </Box>
            <Box mt={4} width="100%" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
                <Button size="md" startDecorator={(
                    <FaPlus />
                )} >Add new board</Button>
            </Box>
            <Box mt={4} display="flex" gap={2}>
                <TaskList />
                <TaskList />
            </Box>
        </Box>
    )
}