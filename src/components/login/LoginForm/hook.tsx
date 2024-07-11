import React, { useState } from "react";

type ILoginState = {
    email: string;
    password: string
}

export const useLoginForm = () => {
    const [state, setState] = useState<ILoginState>({
        email: "",
        password: ""
    });

    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

    const toggleShowPassword = () => setIsPasswordShown(!isPasswordShown);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const onClick = () => {
        alert("logged in");
    }

    return {
        state,
        isPasswordShown,
        toggleShowPassword,
        onChange,
        onClick
    }
}