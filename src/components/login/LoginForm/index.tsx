import { FC } from "react";
import { Box, Typography, FormControl, FormLabel, FormHelperText, Input, Button, IconButton } from "@mui/joy";
import { SiPreact } from "react-icons/si";
import { PiPasswordFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useLoginForm } from "./hook";

export const LoginForm: FC = (): JSX.Element => {
    const {
        state,
        onChange,
        onClick,
        isPasswordShown,
        toggleShowPassword
    } = useLoginForm();

    return (
        <Box flex={1} display="flex" alignItems="center" justifyContent="center" bgcolor="#D9DDE8" >
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                width={420}
                height={500}
                boxShadow="lg"
                bgcolor="white"
                borderRadius={6}
            >
                <Box mt={4} display="flex" flexDirection="column" alignItems="center" gap={2} >
                    <SiPreact size={60} color="#005EFF" />
                    <Typography level="title-lg">Welcome back</Typography>
                </Box>
                <Box display="flex" flexDirection="column" gap={2} width={"100%"} mt={2} p={2}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            startDecorator={(
                                <IoMail />
                            )}
                            type='email'
                            name="email"
                            value={state.email}
                            onChange={onChange}
                            placeholder='Email'
                            size="md"
                        />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <FormControl >
                        <FormLabel>Password</FormLabel>
                        <Input
                            startDecorator={(
                                <PiPasswordFill />
                            )}
                            size="md"
                            type={isPasswordShown ? "text" : "password"}
                            name="password"
                            value={state.password}
                            onChange={onChange}
                            placeholder='password'
                            endDecorator={(
                                <IconButton onClick={toggleShowPassword} >
                                    { isPasswordShown ? <IoMdEye /> : <IoMdEyeOff /> }
                                </IconButton>
                            )}
                        />
                        <FormHelperText></FormHelperText>
                    </FormControl>
                    <Button onClick={onClick} >Login</Button>
                    <Typography textAlign="center" level="body-sm">Don't have an account yet? {" "}
                        <Typography color="primary" >
                            create one
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}