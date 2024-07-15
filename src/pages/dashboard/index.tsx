import { FC } from "react";
import { Box, CircularProgress } from "@mui/joy"
import { UserNavbar } from "../../components";
import { ProjectList } from "../../components/ProjectList";
import { useDashboard } from "./hook";
import { NewItemModal } from "../../components/NewItemModal";
import { useMutation, useQuery } from "@apollo/client";
import { PROJECTS } from "../../graphql/projects";
import { CREATE_PROJECT } from "../../graphql/create-project";
import { DELETE_PROJECT } from "../../graphql/delete-project";
import { Sidebar } from "../../components/Sidebar";

export const Dashboard: FC = (): JSX.Element => {
    const { data, loading } = useQuery(PROJECTS);
    const [onCreateProject] = useMutation(CREATE_PROJECT, {
        refetchQueries: [
            PROJECTS,
            "PROJECTS"
        ]
    });
    const [onDeleteProject] = useMutation(DELETE_PROJECT, {
        refetchQueries: [
            PROJECTS,
            "PROJECTS"
        ]
    })


    const { 
        onToggleOpenDialog, 
        openNewProjectDialog,  
    } = useDashboard();

    return (
        <Box display="flex" p={2}>
            <Sidebar />
            <Box flex={1} px={2} >
                <UserNavbar onOpeNewProjectDialog={onToggleOpenDialog} />
                {
                    loading ? <CircularProgress /> : (
                        <ProjectList onDeleteProject={async (id) => await onDeleteProject({ variables: { id } })} projects={data ? data.projects : []} />
                    )
                }
            </Box>
            <NewItemModal onClickWithTitle={async (title) => await onCreateProject({ variables: { title } })} open={openNewProjectDialog} onClose={onToggleOpenDialog} />
        </Box>
    )
}