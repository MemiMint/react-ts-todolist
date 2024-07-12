import { FC } from "react";
import { Box, Typography, Stack } from "@mui/joy";
import { FaBookmark } from "react-icons/fa";

export const Task: FC = (): JSX.Element => {
    return (
        <Box width={320} bgcolor="white" p={2} borderRadius={6}>
            <Stack direction="row" spacing={2}>
                <Typography fontWeight="bold" fontSize={12} borderRadius={6} variant="soft" color="primary">
                    Code
                </Typography>
                <Typography fontWeight="bold" fontSize={12} borderRadius={6} variant="soft" color="primary">
                    Design
                </Typography>
                <Typography fontWeight="bold" fontSize={12} borderRadius={6} variant="soft" color="primary">
                    UX
                </Typography>
            </Stack>
            <Typography mt={2} fontWeight="bold" fontSize={14} >
                Create React App{" "}
                <Typography fontSize={14} variant="soft" color="primary">
                    IN PROGRESS
                </Typography>
            </Typography>
            <Typography level="body-sm" mt={2} >
                In order to create the app we need to implement a create app alibrary...
            </Typography>
            <Box mt={2} width="100%" display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
                <Typography fontSize={12} variant="soft" color="primary" fontWeight="bold" startDecorator={(
                    <FaBookmark />
                )}>
                    ID-49
                </Typography>
            </Box>
        </Box>
    )
}