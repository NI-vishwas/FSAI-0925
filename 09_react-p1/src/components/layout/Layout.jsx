import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
export default function Layout({ children }) {
   return (
       <div className="d-flex flex-column min-vh-100">
          <AppNavBar />
          <Container className="flex-grow-1 my-4">
              {children}
          </Container>
          <Footer />
</div>
);
}
