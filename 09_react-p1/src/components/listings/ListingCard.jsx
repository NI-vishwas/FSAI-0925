import { Card, Button } from "react-bootstrap";

export default function ListingCard({ listing }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={listing.image}
        alt={listing.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{listing.title}</Card.Title>
        Listing Details
      </Card.Body>
    </Card>
  );
}