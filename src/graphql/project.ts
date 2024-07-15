import { gql } from "@apollo/client";


export const PROJECT = gql`
    query($id: String!) {
        project(id: $id) {
            title
        }
    }   
`