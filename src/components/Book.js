import React from "react";
import { Button, Col, Image } from "react-bootstrap";

export default function Book({ book, index }) {
  return (
    <Col xs={12} className="d-flex align-items-center">
      <Image fluid src={book.img} style={{ width: 150 }} className="m-3" />
      <div>
        <h5>{book.title}</h5>
        <span>{book.price}</span>
      </div>
    </Col>
  );
}
