import { FC } from "react";
import { Box, Typography } from "@mui/joy";
import { SiPreact } from "react-icons/si";
import { AiOutlineProject } from "react-icons/ai";

export const Sidebar: FC = (): JSX.Element => {
    return (
        <Box p={2} width={220} height="90vh" bgcolor="#005EFF" borderRadius={6}>
            <Box bgcolor="white" borderRadius={6} display="flex" alignItems="center" gap={2} p={2} >
                <SiPreact size={40} color="#005EFF" />
                <Typography level="title-sm" sx={{ color: "#005EFF" }} >React TodoList</Typography>
            </Box>
            <Box mt={2} borderRadius={6} display="flex" alignItems="center" gap={2} p={1} >
                <AiOutlineProject size={20} color="white" />
                <Typography level="title-sm" sx={{ color: "white" }}>Projects</Typography>
            </Box>
        </Box>
    )
}   