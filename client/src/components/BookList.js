import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';


import { GET_BOOKS } from "../queries/queries";

function BookList() {
const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
        <ul id='book-list'>
            {data.books.map(book => <li key={book.id}>{book.name}</li> )}
        </ul>
    </div>
  );
}

export default BookList;
