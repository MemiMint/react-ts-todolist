import { FC } from 'react';
import { Box } from "@mui/joy/";
import { InfoSide, LoginForm } from "../../components/login";


export const Login: FC = (): JSX.Element => {
  return (
    <Box display="flex">
      <InfoSide />
      <LoginForm />
    </Box>
  )
}
