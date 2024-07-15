import { gql } from "@apollo/client";

export const PROJECTS = gql`
    query {
        projects {
            _id
            title
        }
    }
`