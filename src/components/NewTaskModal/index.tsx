import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { CustomInput } from '../CustomInput';
import { Chip, Select, Box, Option, Textarea, Input, IconButton, SvgIcon, Typography, ChipDelete, CircularProgress } from '@mui/joy';
import { FaPlus, FaX } from "react-icons/fa6";
import { useNewTaskModal } from './hook';
import { IProps } from "./IProps";
import { useQuery } from '@apollo/client';
import { TASK } from '../../graphql/task';

export const NewTaskModal: React.FC<IProps> = (props): JSX.Element => {
  const {
    state,
    setState,
    onAddNewTag,
    onChange,
    onChangeSelect,
    onDeleteTag,
    onOpenTagDialog
  } = useNewTaskModal();

  const { loading } = useQuery(TASK, {
    variables: {
      id: props.id
    },
    onCompleted(data) {
      setState((prevState) => ({
        ...prevState,
        title: data.task.title,
        description: data.task.description,
        status: data.task.status,
        risk: data.task.risk,
        tags: data.task.tags
      }));
    },
  })

  return (
    <React.Fragment>
      <Modal open={props.open} onClose={() => {
        props.onClose();
        setState({
          description: "",
          newTag: "",
          openNewTagInput: false,
          risk: "",
          status: "",
          tags: [],
          title: ""
        })
      }}>
        {
          loading ? <CircularProgress /> : (
            <ModalDialog>
              <Box display="flex" alignItems="center" justifyContent="space-between" >
                <DialogTitle>{props.id ? state.title : "Create Task"}</DialogTitle>
                <FaX cursor="pointer" onClick={() => {
                  props.onClose();
                  setState({
                    description: "",
                    newTag: "",
                    openNewTagInput: false,
                    risk: "",
                    status: "",
                    tags: [],
                    title: ""
                  })
                }} size={15} />
              </Box>
              <DialogContent>Fill in the information to {props.id ? "update task" : "create a new task"}</DialogContent>
              <Stack spacing={2}>
                <CustomInput name="title" value={state.title} onChange={onChange} placeholder='title' />
                <Stack direction="row" spacing={2}>
                  {
                    state.tags.map((value, index) => {
                      return (
                        <Chip key={index} endDecorator={
                          <ChipDelete onDelete={() => onDeleteTag(value.toString())} />
                        } sx={{ borderRadius: 6 }} variant="soft">
                          <Typography fontSize={12} fontWeight="bold">
                            {value}
                          </Typography>
                        </Chip>
                      )
                    })
                  }
                  {state.openNewTagInput ? (
                    <Stack direction="row" spacing={1} >
                      <Input autoFocus name="newTag" value={state.newTag} onChange={onChange} placeholder='tag' sx={{ width: 80 }} />
                      <IconButton onClick={onAddNewTag} variant="soft" size="sm" >
                        <SvgIcon size="sm" color="primary" >
                          <FaPlus />
                        </SvgIcon>
                      </IconButton>
                      <IconButton onClick={onOpenTagDialog} variant="soft" size="sm" color="danger" >
                        <SvgIcon size="sm" >
                          <FaX />
                        </SvgIcon>
                      </IconButton>
                    </Stack>
                  ) : (
                    <IconButton onClick={onOpenTagDialog} variant="soft" size="sm" >
                      <SvgIcon size="sm" color="primary" >
                        <FaPlus />
                      </SvgIcon>
                    </IconButton>
                  )}
                </Stack>
                <Select placeholder="Status" value={state.status} onChange={(event, newValue) => onChangeSelect(event, newValue, "status")} >
                  <Option value="To do">To do</Option>
                  <Option value="In Progress">In Progress</Option>
                  <Option value="Done">Done</Option>
                </Select>
                <Select placeholder="risk" value={state.risk} onChange={(event, newValue) => onChangeSelect(event, newValue, "risk")} >
                  <Option value="Low" >Low</Option>
                  <Option value="Mid" >Mid</Option>
                  <Option value="High">High</Option>
                </Select>
                <Textarea value={state.description} name="description" onChange={onChange} sx={{ width: "100%", height: 100 }} placeholder="description" />
                <Button onClick={() => {
                  props.onClick(
                    state.title,
                    state.tags,
                    state.status,
                    state.risk,
                    state.description
                  );
                  setState({
                    description: "",
                    newTag: "",
                    openNewTagInput: false,
                    risk: "",
                    status: "",
                    tags: [],
                    title: ""
                  })
                  props.onClose();
                }

                } >{props.id ? "Update Task" : "Create Task"}</Button>
                {props.id && <Button color="danger" onClick={() => {
                  props.onDelete!();
                  setState({
                    description: "",
                    newTag: "",
                    openNewTagInput: false,
                    risk: "",
                    status: "",
                    tags: [],
                    title: ""
                  });
                  props.onClose();
                }}>Delete Project</Button>}
              </Stack>
            </ModalDialog>
          )
        }
      </Modal>
    </React.Fragment>
  );
}