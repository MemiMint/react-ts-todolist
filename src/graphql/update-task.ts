import { gql } from "@apollo/client";

export const UPDATE_TASK = gql`
    mutation($id: String!, $taskInput: TaskInput!) {
        updateTask(id: $id, taskInput: $taskInput) {
            _id
        }
    }
`