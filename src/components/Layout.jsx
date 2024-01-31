import { Footer } from "./footer/Footer"
import { CustomNavbar } from "./navbar/Navbar"
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