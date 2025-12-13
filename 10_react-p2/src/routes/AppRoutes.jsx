import { Routes, Route } from "react-router"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ListingDetails from "../components/listings/ListingDetails"


const AppRoutes = () => {
    return (
        <Routes>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="/listings/:listingId" element={<ListingDetails />} />
        </Routes>
    )
}

export default AppRoutes;