import { FC } from "react";
import { Box, Typography, Button, Link, CircularProgress } from "@mui/joy";
import { CustomInput } from "../CustomInput";
import { CustomSnackbar } from "../CustomSnackbar";
import { SiPreact } from "react-icons/si";
import { PiPasswordFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { useLoginForm } from "./hook";

export const LoginForm: FC = (): JSX.Element => {
    const {
        state,
        emailError,
        passwordError,
        snackbarMessage,
        snackbarOpen,
        isLoading,
        onChange,
        onClick,
        onCloseSnackbar
    } = useLoginForm();

    return (
        <Box flex={1} display="flex" alignItems="center" justifyContent="center" bgcolor="#D9DDE8" >
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width={420}
                height={500}
                boxShadow="lg"
                bgcolor="white"
                borderRadius={6}
            >
                <Box mt={4} display="flex" flexDirection="column" alignItems="center" gap={2} >
                    <SiPreact size={60} color="#005EFF" />
                    <Typography level="title-lg">Welcome back</Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} width={"100%"} mt={2} p={2}>
                    <CustomInput
                        size="sm"
                        color={emailError ? "danger" : "primary"}
                        helperText={emailError}
                        startDecorator={(
                            <IoMail />
                        )}  
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="email"
                        value={state.email}
                        onChange={onChange}
                    />
                    <CustomInput
                        size="sm"
                        color={passwordError ? "danger" : "primary"}
                        helperText={passwordError}
                        startDecorator={
                            (<PiPasswordFill />)
                        }
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="password"
                        value={state.password}
                        onChange={onChange}
                        showEye
                    />
                    <Button onClick={onClick}>
                        { isLoading ? <CircularProgress /> : "Login" }
                    </Button>
                    <Typography textAlign="center" level="body-sm">Don't have an account yet? {" "}
                        <Typography color="primary" >
                            <Link href="/register" >Create one</Link>
                        </Typography>
                    </Typography>
                </Box>
            </Box>
            <CustomSnackbar color="danger" open={snackbarOpen} label={snackbarMessage} onClose={onCloseSnackbar} />
        </Box>
    )
}