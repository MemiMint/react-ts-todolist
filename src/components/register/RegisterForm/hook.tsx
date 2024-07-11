import React, { useState } from "react";

type IState = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const useRegisterForm = () => {
    const [state, setState] = useState<IState>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onClick = () => {
        alert("registered");
    }

    return {
        state,
        onChange,
        onClick
    }
}