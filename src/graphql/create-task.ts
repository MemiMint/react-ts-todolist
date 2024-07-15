import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
    mutation($taskInput: TaskInput!) {
        createTask(taskInput: $taskInput) {
            _id
            board_id
            title
            description
            risk
            status
            tags
        }
    }
`