import { FC } from "react";
import { Avatar, Box, Typography } from "@mui/joy"
import { SiPreact } from "react-icons/si";
import { AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { CustomInput } from "../../components/CustomInput";
import { ProjectCard } from "../../components";

export const Dashboard: FC = (): JSX.Element => {
    return (
        <Box bgcolor="#EEF1F2" display="flex" p={2}>
            <Box p={2} width={220} height="90vh" bgcolor="#005EFF" borderRadius={6}>
                <Box bgcolor="white" borderRadius={6} display="flex" alignItems="center" gap={2} p={2} >
                    <SiPreact size={40} color="#005EFF" />
                    <Typography level="title-sm" sx={{ color: "#005EFF" }} >React TodoList</Typography>
                </Box>
                <Box mt={2} borderRadius={6} display="flex" alignItems="center" gap={2} p={1} >
                    <AiOutlineProject size={20} color="white" />
                    <Typography level="title-sm" sx={{ color: "white" }}>Projects</Typography>
                </Box>
                <Box mt={2} borderRadius={6} display="flex" alignItems="center" gap={2} p={1} >
                    <AiOutlineUser size={20} color="white" />
                    <Typography level="title-sm" sx={{ color: "white" }}>Profile</Typography>
                </Box>
            </Box>
            <Box flex={1} px={2} >
                <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" p={2} borderRadius={6} bgcolor="white" boxShadow="lg" >
                    <CustomInput 
                        type="text"
                        startDecorator={
                            (<FaSearch />)
                        } 
                        sx={{ width: 220, height: 40 }} 
                        placeholder="Search" 
                    />
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar />
                        <Typography level="title-md" >John Doe</Typography>
                    </Box>
                </Box>
                <Box p={2} mt={2} width="100%" height="82%" bgcolor="white" boxShadow="lg" borderRadius={6} >
                    <ProjectCard />
                </Box>
            </Box>
        </Box>
    )
}