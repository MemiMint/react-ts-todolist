import { FC } from "react";
import { Box, Typography, Stack, Chip } from "@mui/joy";
import { IProps } from "./IProps";

export const Task: FC<IProps> = (props): JSX.Element => {
    let color: string = ""

    switch (props.risk) {
        case "Low":
            color = "primary"
            break;

        case "Mid": {
            color = "warning";
            break;
        }
        
        case "High": {
            color = "danger";
            break;
        }
    }

    return (
        <Box onClick={props.onClick} sx={{ cursor: "pointer", opacity: (props.status === "Done" ? 0.8 : 1) }} width={320} bgcolor="white" p={2} borderRadius={6}>
            <Stack direction="row" spacing={2}>
                {
                    props.tags.map((tag, index) => {
                        return (
                            <Typography key={index} fontWeight="bold" fontSize={12} borderRadius={6} variant="soft" color="primary">
                                { tag }
                            </Typography>
                        )
                    })
                }
            </Stack>
            <Typography sx={{ textDecoration: (props.status === "Done" ? "line-through" : "") }} mt={2} fontWeight="bold" fontSize={14} >
                { props.title }{" "}
                <Typography fontSize={14} variant="soft" color="primary">
                    { props.status }
                </Typography>
            </Typography>
            <Box mt={1}>
                <Chip sx={{ borderRadius: 6 }} variant="soft" color={color as any}>
                    <Typography fontWeight="bold" fontSize={12}>
                        { props.risk }
                    </Typography>
                </Chip>
            </Box>
            <Typography sx={{ textDecoration: (props.status === "Done" ? "line-through" : "") }} level="body-sm" mt={2} >
                { props.description }
            </Typography>
        </Box>
    )
}