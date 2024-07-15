import { FC } from 'react';
import { Box } from "@mui/joy/";
import { LoginForm } from "../../components/";
import { InfoSide } from "../../components"

export const Login: FC = (): JSX.Element => {
  return (
    <Box display="flex">
      <InfoSide />
      <LoginForm />
    </Box>
  )
}
