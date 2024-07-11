import { FC } from "react";
import { FormControl, FormLabel, FormHelperText, Input, IconButton, Typography, } from "@mui/joy";
import { InputProps } from "@mui/joy/Input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useCustomInput } from "./hook";

type LabelProps = {
    label?: string;
    helperText?: React.ReactNode | string;
}

type CustomInputProps = { showEye?: boolean } & LabelProps & InputProps;

export const CustomInput: FC<CustomInputProps> = (props): JSX.Element => {
    const { _type, onToggleInputType } = useCustomInput(props.type!);
    
    return (
        <FormControl>
            <FormLabel>
                <Typography level="body-sm">{ props.label }</Typography>
            </FormLabel>
            <Input
                {...props}
                type={_type}
                endDecorator={(
                    props.showEye ? (
                        (_type === "password") ? (
                            <IconButton onClick={() => onToggleInputType("text")} >
                                <IoMdEye />
                            </IconButton>
                        ) : (
                            <IconButton onClick={() => onToggleInputType("password")} >
                                <IoMdEyeOff />
                            </IconButton>
                        )
                    ) : null
                )}
            />
            <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
    )
}