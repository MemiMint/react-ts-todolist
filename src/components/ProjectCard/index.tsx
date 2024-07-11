import { FC } from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Avatar from "@mui/joy/Avatar";
import Typography from '@mui/joy/Typography';
import SvgIcon from '@mui/joy/SvgIcon';
import { AiOutlineProject } from "react-icons/ai";

export const ProjectCard: FC = (): JSX.Element => {
    return (
        <Card sx={{ width: 320, cursor: "pointer" }} variant="solid" color="primary" invertedColors>
            <CardContent orientation="horizontal">
                <Avatar>
                    <SvgIcon>
                        <AiOutlineProject />
                    </SvgIcon>
                </Avatar>
                <CardContent>
                    <Typography level="body-md">Project</Typography>
                    <Typography level="h2">Lead Perfection Lite</Typography>
                </CardContent>
            </CardContent>
            <CardActions>
                <Button variant="soft" size="sm">
                    Go to project
                </Button>
                <Button>
                    Delete project
                </Button>
            </CardActions>
        </Card>
    );
}