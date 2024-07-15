import { FC } from "react";
import { Box, Typography, Avatar, Button, CircularProgress } from "@mui/joy";
import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/me";
import { CustomInput } from "../CustomInput";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IProps } from "./IProps";

type UserInfo = {
    id: string;
    name: string;
}

const UserInfo: FC<UserInfo> = (props): JSX.Element => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");

        navigate("/");
    }

    return (
        <Box borderRadius={6} bgcolor="#005EFF" sx={{ cursor: "pointer" }} display="flex" alignItems="center" gap={2} py={1} px={2}>
            <Avatar size="sm" />
            <Typography sx={{ color: "white" }} level="title-md">{props.name}</Typography>
            <Button size="sm" onClick={logout} color="danger">Logout</Button>
        </Box>
    )
}

export const UserNavbar: FC<IProps> = (props): JSX.Element => {
    const { data, loading } = useQuery(ME);

    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" p={2} borderRadius={6} bgcolor="white" boxShadow="lg" >
            <Box display="flex" alignItems="center" gap={2} >
                <CustomInput
                    type="text"
                    startDecorator={
                        (<FaSearch />)
                    }
                    sx={{ width: 220, height: 40 }}
                    placeholder="Search"
                />
                <Box width="100%" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
                    <Button onClick={props.onOpeNewProjectDialog} size="sm" startDecorator={(
                        <FaPlus />
                    )} >Add new project</Button>
                </Box>
            </Box>
            {loading ? <CircularProgress /> : <UserInfo id={data.me._id} name={data.me.name} />}
        </Box>
    )
}