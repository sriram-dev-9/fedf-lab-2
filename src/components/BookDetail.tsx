import type React from 'react';
import { useParams, Link } from 'react-router-dom';
import booksData from '../data/booksData';

const BookDetail: React.FC = () => {
  const { bookid } = useParams<{ bookid: string }>();
  const bookIdNum = parseInt(bookid || '', 10);
  const book = booksData.find((b) => b.id === bookIdNum);

  if (!book) return <p>Book not found!</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <h4>By {book.author}</h4>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default BookDetail;
