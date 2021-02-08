// import React, { Component } from "react";
// import {
//   Navbar,
//   Nav,
//   Form,
//   FormControl,
//   Button,
//   NavDropdown,
//   Container,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { category, setcategory } from "../components/Home";

// export default function NavBar() {
//   return (
//     <Container>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title={category} id="basic-nav-dropdown">
//               {categories.map((cat) => (
//                 <NavDropdown.Item onClick={() => setCategory(cat)}>
//                   {cat}
//                 </NavDropdown.Item>
//               ))}
//               <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>

//               <NavDropdown.Item href="#action/3.4">History</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4">Fantasy</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form inline>
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>
//     </Container>
//   );
// }
