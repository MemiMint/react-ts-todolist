import { FC } from "react";
import { Box, SvgIcon, Typography } from "@mui/joy";
import { FaGithub } from "react-icons/fa";

export const InfoSide: FC = (): JSX.Element => {
    const navigate = (url: string) => {
        window.open(url);
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" flex={0.5} height="100vh" bgcolor="#005EFF" p={2}>
            <Typography level="h1" sx={{ color: "white" }} lineHeight={2}>
                React + Typescript + Material UI Task List
            </Typography>
            <Box width={"80%"} borderRadius={6} bgcolor="#004CDF" p={2}>
                <Typography level="h3" sx={{ color: "white" }}>A simple task list</Typography>
                <Typography level="body-sm" sx={{ color: "white" }} mt={2} >
                    This is a simple task list made in ReactJS using Typescript as main language
                    and Material UI (Joy) as Component Library. Links to both backend and frontend repositories can be found here:
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" gap={1} mt={2} >
                    <Box
                        gap={1}
                        bgcolor="white"
                        display="flex"
                        alignItems="center"
                        width="100%"
                        p={1}
                        borderRadius={6}
                        onClick={() => navigate("https://github.com/MemiMint/react-ts-todolist")}
                    >
                        <SvgIcon color="primary" >
                            <FaGithub />
                        </SvgIcon>
                        <Typography fontWeight={600} color="primary" level="body-sm">Frontend Code </Typography>
                    </Box>
                    <Box
                        gap={1}
                        bgcolor="white"
                        display="flex"
                        alignItems="center"
                        width="100%"
                        p={1}
                        borderRadius={6}
                    >
                        <SvgIcon color="primary" >
                            <FaGithub />
                        </SvgIcon>
                        <Typography fontWeight={600} color="primary" level="body-sm">Backend Code </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}