import React from "react";
import Book from "../components/Book";
import {
  Col,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Pagination,
} from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = ["scifi", "romance", "horror", "history", "fantasy"];
const booksUrl = "https://strive-bookstore.herokuapp.com/books";
const limits = [10, 20, 30];

export default function Home() {
  const [bookList, setBooklist] = useState([]);
  const [category, setCategory] = useState(categories[0]);
  const [limit, setLimit] = useState(limits[0]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [pagesN, setPagesN] = useState(1);

  const getbooks = useCallback(async () => {
    try {
      const response = await fetch(
        booksUrl +
          `?category=${category}` +
          `&limit=${limit}` +
          `offset=${(selectedPage - 1) * limit}`
      );
      const { data, numberOfItems } = await response.json();

      setPagesN(Math.ceil(numberOfItems / limit));

      setBooklist(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      //   next(error);
    }
  }, [category, limit, selectedPage]);

  useEffect(() => {
    getbooks();
  }, [getbooks, category, limit, selectedPage]);

  console.log(bookList); // false

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          BOOKS Function Component and Hooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
            <NavDropdown title={category} id="basic-nav-dropdown">
              {categories.map((cat) => (
                <NavDropdown.Item onClick={() => setCategory(cat)}>
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title={limit} id="basic-nav-dropdown">
              {limits.map((lim) => (
                <NavDropdown.Item onClick={() => setLimit(lim)}>
                  {lim}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Pagination className="mx-auto my-3 justify-content-center">
        {(() => {
          let items = [];

          for (let number = 1; number <= pagesN; number++) {
            items.push(
              <Pagination.Item
                key={number}
                active={number === selectedPage}
                onClick={() => setSelectedPage(number)}
              >
                {number}
              </Pagination.Item>
            );
          }

          return items;
        })()}
      </Pagination>
      <Col>
        {bookList &&
          bookList.map((book, key) => <Book book={book} key={key} />)}
      </Col>
    </Container>
  );
}
