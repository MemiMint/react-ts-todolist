import { FC } from 'react';
import { Box, Typography } from "@mui/joy/";
import { FaGithub } from "react-icons/fa";


export const Login: FC = (): JSX.Element => {

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" flexDirection="column" justifyContent="space-between" flex={0.5} height="100vh" bgcolor="#005EFF" p={2}>
        <Typography level="h1" sx={{ color: "white" }} lineHeight={2}>
          React + Typescript + Material UI Task List
        </Typography>
        <Box width={"80%"} borderRadius={6} bgcolor="#004CDF" p={2}>
          <Typography level="h3" sx={{ color: "white" }}>A simple task list</Typography>
          <Typography level="body-sm" sx={{ color: "white" }} mt={2} >
            This is a simple task list made in ReactJS using Typescript as main language
            and Material UI (Joy) as Component Library. Links to both backend and frontend can be found here:
          </Typography>
          <Box mt={2} >
            <Typography  startDecorator={<FaGithub />} level="body-sm" sx={{ color: "white" }} >
              https://github.com/memimint/reactjs-list
            </Typography>
            <Typography startDecorator={<FaGithub />} level="body-sm" sx={{ color: "white" }} >
              https://github.com/memimint/reactjs-list
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box flex={1} >

      </Box>
    </Box>
  )
}
