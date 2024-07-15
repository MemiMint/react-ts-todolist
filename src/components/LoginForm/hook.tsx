import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../graphql/login";
import { useMutation } from "@apollo/client";
import { AuthResponse } from "../../types/auth-response";

type ILoginState = {
    email: string;
    password: string
}

export const useLoginForm = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<ILoginState>({
        email: "",
        password: ""
    });


    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [onLogin] = useMutation(LOGIN);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onCloseSnackbar = () => setSnackbarOpen(false);

    const onClick = async (): Promise<void> => {
        if (!state.email) {
            setEmailError("* email cannot be empty");
            
            return;
        }

        if (!state.password) {
            setPasswordError("* password cannot be empty");
            
            return;
        }

        setIsLoading(true);

        try {
            setEmailError("");
            setPasswordError("");

            const { data } = await onLogin({
                variables: {
                    loginInput: {
                        email: state.email,
                        password: state.password
                    }
                }
            });

            const authResponse = data.login as AuthResponse;

            if (authResponse.message) {
                setSnackbarOpen(true);
                setSnackbarMessage(authResponse.message);
                
                return;
            }

            localStorage.setItem("token", authResponse.token!);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        state,
        emailError,
        passwordError,
        snackbarOpen,
        snackbarMessage,
        isLoading,
        onCloseSnackbar,
        onChange,
        onClick
    }
}