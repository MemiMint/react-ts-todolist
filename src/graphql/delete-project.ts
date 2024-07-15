import { gql } from "@apollo/client";

export const DELETE_PROJECT = gql`
    mutation($id: String!) {
        deleteProject(id: $id) {
            _id
            title
        }
    }
`