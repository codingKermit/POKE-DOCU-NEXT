'use client'

import { Button, Form, Nav, Navbar } from "react-bootstrap";

export default function Navigation(){
    return(
        <div>
            <Navbar>
                <Navbar.Brand>POKE-DOCU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/pokemon">Pokemon</Nav.Link>
                        <Nav.Link href="#home">Item</Nav.Link>
                        <Nav.Link href="#home">Move</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="text"
                        placeholder="search"
                        className="me-2"
                        aria-label="Search"/>
                        <Button>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}