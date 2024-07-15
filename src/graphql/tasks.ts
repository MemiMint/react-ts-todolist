import { gql } from "@apollo/client";

export const TASKS = gql`
    query($boardId: String!) {
        tasks(boardId: $boardId) {
            _id,
            board_id,
            title
            tags
            status
            risk
            description
        }
    }
`