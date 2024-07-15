import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../graphql/register";
import { AuthResponse } from "../../types/auth-response";
import { useNavigate } from "react-router-dom";

type IState = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const useRegisterForm = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<IState>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [conFirmPasswordError, setConfirmPasswordError] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>("");
    const [snackbarStatus, setSnackbarStatus] = useState<string>("danger");

    const [onRegister] = useMutation(REGISTER);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onCloseSnackbar = () => setSnackbarOpen(false);

    const onClick = async (): Promise<void> => {
        if (!state.username) {
            setUsernameError("* username cannot be empty");

            return;
        }

        else if (!state.email) {
            setEmailError("* email cannot be empty");
        
            return;
        }

        else if (!state.password) {
            setPasswordError("* password cannot be empty");
        
            return;
        }

        else if (state.confirmPassword !== state.password) {
            setConfirmPasswordError("* passwords dont match!");
        
            return;
        }

        setIsLoading(true);

        try {
            setEmailError("");
            setPasswordError("");
            setUsernameError("");
            setConfirmPasswordError("");

            const { data } = await onRegister({ variables: { registerInput: { name: state.username, password: state.password, email: state.email } } })

            const authResponse = data.register as AuthResponse;
    
            if (!authResponse.token) {
                setSnackbarMessage("Could not create user");
                setSnackbarStatus("danger");
                setSnackbarOpen(true);

                return;
            }

            setSnackbarMessage(authResponse.message!);
            setSnackbarStatus("success");
            setSnackbarOpen(true);
    
            localStorage.setItem("token", authResponse.token);
            
            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            setSnackbarMessage("Something went wrong");
            setSnackbarStatus("danger");
            setSnackbarOpen(true);

        } finally {
            setIsLoading(false);
        }
    }

    return {
        state,
        emailError,
        usernameError,
        passwordError,
        conFirmPasswordError,
        snackbarOpen,
        isLoading,
        snackbarMessage,
        snackbarStatus,
        onChange,
        onClick,
        onCloseSnackbar
    }
}