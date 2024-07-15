import { FC } from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Avatar from "@mui/joy/Avatar";
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { AiOutlineProject } from "react-icons/ai";
import { IProps } from "./IProps";
import { useNavigate } from 'react-router-dom';

export const ProjectCard: FC<IProps> = (props): JSX.Element => {
    const navigate = useNavigate();


    return (
        <Card sx={{ width: 320, height: 160, cursor: "pointer" }} variant="solid" color="primary" invertedColors>
            <CardContent orientation="horizontal">
                <Avatar>
                    <SvgIcon>
                        <AiOutlineProject />
                    </SvgIcon>
                </Avatar>
                <CardContent>
                    <Typography level="body-md">Project</Typography>
                    <Typography level="title-lg">{ props.title }</Typography>
                </CardContent>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(`/project/${props.id}`)} variant="soft" size="sm">
                    Go to project
                </Button>
                <Button onClick={() => props.onDelete(props.id)} >
                    Delete project
                </Button>
            </CardActions>
        </Card>
    );
}