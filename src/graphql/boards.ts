import { gql } from "@apollo/client";

export const BOARDS = gql`
    query($projectId: String!) {
        boards(projectId: $projectId) {
            _id
            title
        }
    }
`