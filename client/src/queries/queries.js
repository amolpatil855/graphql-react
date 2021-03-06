import { gql } from 'apollo-boost';

export const GET_AUTHORS = gql`
{
  authors {
    name
    id
  }
}
`;

export const GET_BOOKS = gql`
{
    books{
        name
        id
    }
}
`;

export const ADD_BOOK = gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
        }
    }
`;