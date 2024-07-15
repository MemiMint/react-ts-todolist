import { FC } from "react";
import { Box, Typography } from "@mui/joy";
import { ProjectCard } from "../ProjectCard";
import { IProps } from "./IProps";

const NoProjects = (): JSX.Element => {
    return (
        <Box width={"100%"} height="100%" display="flex" alignItems="center" justifyContent="center">
            <Typography level="h1" color="neutral" >You have no projects</Typography>
        </Box>
    )
}

export const ProjectList: FC<IProps> = (props): JSX.Element => {
    return (
        <Box mt={2} width="100%" height="82%" bgcolor="white" boxShadow="lg" borderRadius={6} >
            { 
                !props.projects.length ? <NoProjects /> : <Box p={1} display="flex" alignItems="center" gap={1}  flexWrap="wrap">
                    { props.projects.map((project, index) => {
                        return (
                            <ProjectCard onDelete={(id) => props.onDeleteProject(id)} key={index} id={project._id} title={project.title} />
                        )
                    }) }
                </Box>
            }
        </Box>
    )
}