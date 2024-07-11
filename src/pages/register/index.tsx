import { FC } from 'react';
import { Box } from "@mui/joy/";
import { InfoSide } from "../../components"
import { RegisterForm } from "../../components/register";

export const Register: FC = (): JSX.Element => {
  return (
    <Box display="flex">
      <InfoSide />
      <RegisterForm />
    </Box>
  )
}
