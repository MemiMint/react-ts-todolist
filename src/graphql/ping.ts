import { gql } from "@apollo/client";

export const PING = gql`
    query {
        ping
    }
`;