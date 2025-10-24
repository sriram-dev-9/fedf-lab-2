import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import booksData from '../data/booksData';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<typeof booksData>([]);

  // simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setBooks(booksData);
    }, 500);
  }, []);

  if (books.length === 0) return <p>Loading books...</p>;

  return (
    <div>
      <h2>Available Books</h2>
      <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
