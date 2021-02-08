import React from "react";
import Book from "../components/Book";
import { Col } from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";

const categories = ["scifi", "romance", "horror", "history", "fantasy"];
const booksUrl = "https://strive-bookstore.herokuapp.com/books";

export default function Home() {
  const [bookList, setBooklist] = useState([]);

  const [category, setCategory] = useState(categories[0]);

  const getbooks = useCallback(async () => {
    try {
      const response = await fetch(booksUrl + `?category=${category}`);
      const { data, numberOfItems } = await response.json();

      setBooklist(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      //   next(error);
    }
  }, [category]);

  useEffect(() => {
    getbooks();
  }, [getbooks]);

  console.log(bookList); // false

  return (
    <Col>
      {bookList &&
        bookList.map((book, index) => <Book book={book} key={index} />)}
    </Col>
  );
}
