import { Footer } from "./Footer"
import { CustomNavbar } from "./Navbar"
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