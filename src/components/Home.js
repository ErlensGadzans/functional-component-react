import React from "react";
import Book from "../components/Book";
import {
  Col,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useState, useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  }, [getbooks, category]);

  console.log(bookList); // false

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title={category} id="basic-nav-dropdown">
              {categories.map((cat) => (
                <NavDropdown.Item onClick={() => setCategory(cat)}>
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Col>
        {bookList &&
          bookList.map((book, key) => <Book book={book} key={key} />)}
      </Col>
    </Container>
  );
}
