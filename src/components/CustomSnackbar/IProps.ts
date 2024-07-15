import React from "react";

export type IProps = {
    icon?: React.ReactNode;
    label: string;
    open: boolean;
    color: "primary" | "success" | "danger";
    onClose: () => void;
}