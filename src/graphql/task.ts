import { gql } from "@apollo/client";

export const TASK = gql`
    query($id: String!) {
        task(id: $id) {
            _id
            title
            description
            tags
            status
            risk
        }
    }
`