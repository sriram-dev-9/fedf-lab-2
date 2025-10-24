import type React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../data/booksData';

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => (
  <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8, width: 200 }}>
    <h3>{book.title}</h3>
    <p>By {book.author}</p>
    <Link to={`/book/${book.id}`} style={{ color: 'blue' }}>View Details</Link>
  </div>
);

export default BookCard;
