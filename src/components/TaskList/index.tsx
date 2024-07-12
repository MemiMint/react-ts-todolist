import { FC } from "react";
import { Box, Typography, Button } from "@mui/joy";
import { FaPlus } from "react-icons/fa6";
import { Task } from "../Task";

export const TaskList: FC = (): JSX.Element => {
    return (
        <Box bgcolor="#005EFF" p={2} borderRadius={6}>
            <Typography sx={{ color: "white", fontSize: 18, fontWeight: "bold" }} >
                To Do
            </Typography>
            <Box mt={2}>
                <Task />
            </Box>
            <Box pt={2} width="100%" display="flex" alignItems="center" justifyContent="flex-end">
                <Button variant="soft" color="primary" size="md" startDecorator={(
                    <FaPlus />
                )}>
                    Add Task
                </Button>
            </Box>
        </Box>
    )
}