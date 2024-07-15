import { gql } from "@apollo/client";

export const DELETE_BOARD = gql`
    mutation($id: String!) {
        deleteBoard(id: $id) {
            _id
        }
    }
`