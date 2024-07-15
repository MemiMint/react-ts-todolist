import { gql } from "@apollo/client";

export const CREATE_PROJECT = gql`
    mutation($title: String!) {
        createProject(title: $title) {
            _id
            title
        }
    }
`