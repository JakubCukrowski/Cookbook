import { Footer } from "../components/Footer"
import { CustomNavbar } from "../components/Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <CustomNavbar />
            <Outlet />
            <Footer />
        </>
    )
}