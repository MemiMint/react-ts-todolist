import { FC } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Box, Typography, Button } from "@mui/joy";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";
import { TaskList } from "../../components/TaskList";
import { useNavigate, useParams } from "react-router-dom";
import { NewItemModal } from "../../components/NewItemModal";
import { BOARDS } from "../../graphql/boards";
import { useProject } from "./hook";
import { CREATE_BOARD } from "../../graphql/create-board";
import { Board } from "../../types/board";
import { PROJECT } from "../../graphql/project";
import { DELETE_BOARD } from "../../graphql/delete-board";

export const Project: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { onToggleOpenDialog, openNewBoardDialog } = useProject();


    const project = useQuery(PROJECT, { variables: { id } });
    const boards = useQuery(BOARDS, { variables: { projectId: id } });
    const [onCreateProject] = useMutation(CREATE_BOARD, {
        refetchQueries: [
            BOARDS,
            "BOARDS"
        ]
    });  
    const [onDeleteBoard] = useMutation(DELETE_BOARD, {
        refetchQueries: [
            BOARDS,
            "BOARDS"
        ]
    })


    return (
        <Box p={2} >
            <Box width="inherit" bgcolor="#005EFF" display="flex" alignItems="center" justifyContent="space-between" borderRadius={6} p={1} gap={2}>
                <Box display="flex" alignItems="center" gap={2}>
                    <AiOutlineProject size={28} color="white" />
                    <Typography sx={{ color: "white" }} level="title-lg">{project.data ? project.data.project.title : ""}</Typography>
                </Box>
                <Button onClick={() => navigate("/dashboard")} >Exit</Button>
            </Box>
            <Box mt={4} width="100%" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
                <Button onClick={onToggleOpenDialog} size="md" startDecorator={(
                    <FaPlus />
                )} >Add new board</Button>
            </Box>
            <Box display="flex" gap={2}>
                {
                    boards.data && (
                        boards.data.boards.map((board: Board, index: number) => {
                            return (
                                <TaskList onDelete={(id) => onDeleteBoard({ variables: { id } })} key={index} id={board._id} title={board.title} />
                            )
                        })
                    )
                }
            </Box>
            <NewItemModal onClose={onToggleOpenDialog} open={openNewBoardDialog} onClickWithTitle={async (title) => await onCreateProject({ variables: { projectId: id, title: title } })} />
        </Box>
    )
}