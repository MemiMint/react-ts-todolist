import { gql } from "@apollo/client";

export const DELETE_TASK = gql`
    mutation($id: String!) {
        deleteTask(id: $id) {
            _id
        }
    }
`