import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation CreateBoard($title: String!, $projectId: String!) {
        createBoard(title: $title, projectId: $projectId) {
            _id
            title
        }
    }
`