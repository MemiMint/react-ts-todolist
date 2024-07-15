import React, { useState } from "react";

type IState = {
    title: string;
    tags: string[];
    status: string;
    risk: string;
    description: string;
    openNewTagInput: boolean;
    newTag: string;
}

export const useNewTaskModal = () => {
    const [state, setState] = useState<IState>({
        title: "",
        description: "",
        risk: "",
        status: "",
        tags: [],
        newTag: "",
        openNewTagInput: false
    });

    const onAddNewTag = () => {
        setState((prevState) => ({
            ...prevState,
            tags: [...prevState.tags, prevState.newTag],
            newTag: "",
            openNewTagInput: false
        }));
    }

    const onDeleteTag = (tagToDelete: string) => {
        const tags = state.tags;

        const filteredArr = tags.filter((tag) => tag !== tagToDelete);

        setState((prevState) => ({
            ...prevState,
            tags: filteredArr
        }));
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onChangeSelect = (newValue: string | null, name: string, event?: React.SyntheticEvent | null ) => {
        event?.target;
        
        setState((prevState) => ({
            ...prevState,
            [name]: newValue
        }));
    }

    const onOpenTagDialog = () => setState((prevState) => ({ ...prevState, openNewTagInput: !prevState.openNewTagInput }));


    return {
        state,
        setState,
        onChange,
        onAddNewTag,
        onDeleteTag,
        onChangeSelect,
        onOpenTagDialog
    }
}