import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { IProps } from "./IProps";

export const NewItemModal: React.FC<IProps> = (props): JSX.Element => {
  const [title, setTitle] = React.useState<string>("");

  return (
    <React.Fragment>
      <Modal open={props.open} onClose={props.onClose}>
        <ModalDialog>
          <DialogTitle>Create new project</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={title} onChange={(event) => setTitle(event.target.value)} autoFocus  />
              </FormControl>
              <Button onClick={() => {
                props.onClickWithTitle(title);
                props.onClose();
                setTitle("");
              }} type="submit">Submit</Button>
            </Stack>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}