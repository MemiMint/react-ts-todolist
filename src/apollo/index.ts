import {
    ApolloClient,
    InMemoryCache,
    HttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});