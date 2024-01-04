import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Spinner } from "react-bootstrap";

export const Dashboard = () => {
    const {user} = UserAuth()

    return (
        <>
            {user !== null 
            ? <section style={{maxWidth: "100%"}}>
                <h1>{user.displayName}</h1>
            </section>
            :   <div style={{maxWidth: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Spinner/>
                </div>}
        </>
        
    )
}