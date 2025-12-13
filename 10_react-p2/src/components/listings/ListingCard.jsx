import { Card, Button } from "react-bootstrap";
import ListingModal from "./ListingModal";
import { useState } from "react";
import { Link } from "react-router";

export default function ListingCard({ listing }) {
  const linkText = "know more.."
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={listing.image}
        alt={listing.title}
        style={{ height: "200px", objectFit: "cover" }}
        onClick={handleShow}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{listing.title}</Card.Title>
        Listing Details
        {/* <a href="#" className="text-blue-600 hover:text-blue-800" >
          {linkText}
        </a> */}
        <Link to={`/listings/${listing.id}`} >
          {linkText}
        </Link>
      </Card.Body>
    </Card>
    <ListingModal 
    listing={listing}
    showModal={show}
    handleClose={handleClose}
    />
    </>
  );
}