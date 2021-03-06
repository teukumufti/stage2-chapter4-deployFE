import React from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Faq = () => {
  const title = "Faq";
  document.title = "Dumbmers | " + title;

  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar title={title} />
      <Container fluid>
        <Row>
          <Col className="titleFaq">
            <h1>FAQs</h1>
            <br />
            <br />
            <br />
            <span>Shipping & Returns</span>
            <Button className="Contact">Contact</Button>
          </Col>
          <Col className="detailFaq">
            <h1> Shipping & Returns </h1>
            <div>
              <h6
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="faq-button"
              >
                <span>Are your products available ?</span>
              </h6>
              <Collapse in={open}>
                <div id="example-collapse-text" className="ms-3 mt-2">
                  It really depends on where you’d like your order shipped! All
                  lojel.com orders ship from our Hong Kong warehouse. All orders
                  that use our Free Standard Shipping will arrive within 3-7
                  business days.
                </div>
              </Collapse>
            </div>
            <div>
              <h6
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="faq-button2"
              >
                <span>How can i shipping ?</span>
              </h6>
              <Collapse in={open}>
                <div id="example-collapse-text" className="ms-3 mt-2">
                  It really depends on where you’d like your order shipped! All
                  lojel.com orders ship from our Hong Kong warehouse. All orders
                  that use our Free Standard Shipping will arrive within 3-7
                  business days.
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
