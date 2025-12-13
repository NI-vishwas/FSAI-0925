import ListingCard from "../components/listings/ListingCard";
import { Container, Row, Col } from "react-bootstrap";
import listings from "../services/api/data";

export default function HomePage() {
    return (
      <Container className="my-4">
        <h2 className="mb-4">Home Listings</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {listings.map((listing) => (
            <Col key={listing.id}>
              <ListingCard
                listing={listing}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
    