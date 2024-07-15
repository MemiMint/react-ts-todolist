import { FC } from "react";
import { Box, Button, Typography, Link, CircularProgress } from "@mui/joy";
import { CustomInput } from "../CustomInput";
import { SiPreact } from "react-icons/si";
import { useRegisterForm } from "./hook";
import { CustomSnackbar } from "../CustomSnackbar";


export const RegisterForm: FC = (): JSX.Element => {
    const { 
        state,
        conFirmPasswordError,
        emailError, 
        passwordError,
        usernameError,
        isLoading,
        snackbarMessage,
        snackbarOpen, 
        snackbarStatus,
        onChange, 
        onClick,
        onCloseSnackbar
    } = useRegisterForm();
    
    return (
        <Box flex={1} display="flex" alignItems="center" justifyContent="center" bgcolor="#D9DDE8" >
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width={420}
                boxShadow="lg"
                bgcolor="white"
                borderRadius={6}
            >
                <Box mt={4} display="flex" flexDirection="column" alignItems="center" gap={2} >
                    <SiPreact size={60} color="#005EFF" />
                    <Typography level="title-lg">Register</Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} width={"100%"} p={2}>
                    <CustomInput
                        value={state.username}
                        color={usernameError ? "danger" : "primary"}
                        helperText={usernameError}
                        onChange={onChange}
                        label="Username"
                        name="username"
                        type="text"
                        size="sm"
                        placeholder="username"
                    />
                    <CustomInput
                        value={state.email}
                        color={emailError ? "danger" : "primary"}
                        helperText={emailError}
                        onChange={onChange}
                        label="Email"
                        name="email"
                        size="sm"
                        type="email"
                        placeholder="email"
                    />
                    <CustomInput
                        value={state.password}
                        color={passwordError ? "danger" : "primary"}
                        helperText={passwordError}
                        onChange={onChange}
                        label="Password"
                        name="password"
                        size="sm"
                        type="password"
                        placeholder="password"
                        showEye
                    />
                    <CustomInput
                        value={state.confirmPassword}
                        color={conFirmPasswordError ? "danger" : "primary"}
                        helperText={conFirmPasswordError}
                        onChange={onChange}
                        label="Confirm Password"
                        name="confirmPassword"
                        size="sm"
                        type="password"
                        placeholder="password"
                    />
                    <Button onClick={onClick}>
                        { isLoading ? <CircularProgress /> : "Register" }
                    </Button>
                    <Typography textAlign="center" level="body-sm">Already have an account? {" "}
                        <Typography color="primary" >
                            <Link href="/" >Sign in</Link>
                        </Typography>
                    </Typography>
                </Box>
            </Box>
            <CustomSnackbar 
                open={snackbarOpen}
                label={snackbarMessage}
                color={snackbarStatus as any}
                onClose={onCloseSnackbar}
            />
        </Box>
    )
}