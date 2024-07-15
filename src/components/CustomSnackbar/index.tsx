import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import { IProps } from "./IProps";
import { Typography } from '@mui/joy';

export const CustomSnackbar: React.FC<IProps> = (props): JSX.Element => {

  return (
    <React.Fragment>
      <Snackbar
        variant="soft"
        color={props.color}
        open={props.open}
        onClose={props.onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={props.icon}
        endDecorator={
          <Button
            onClick={props.onClose}
            size="sm"
            variant="soft"
            color={props.color}
          >
            close
          </Button>
        }
      >
        <Typography level="title-md">{props.label}</Typography>
      </Snackbar>
    </React.Fragment>
  );
}