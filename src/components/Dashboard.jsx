import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Spinner } from "react-bootstrap";

export const Dashboard = () => {
    const {user} = UserAuth()

    return (
        <>
            {user !== null 
            ? <section style={{maxWidth: "100%", minHeight: "100vh", paddingTop: 80}}>
                {user.displayName}
            </section>
            :   <div style={{maxWidth: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Spinner/>
                </div>}
        </>
        
    )
}