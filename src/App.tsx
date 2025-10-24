import type React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App: React.FC = () => (
  <div style={{ padding: 20, fontFamily: "Arial" }}>
    <h1>Book Explorer</h1>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="book/:bookid" element={<BookDetail />} />
    </Routes>
  </div>
);

export default App;
