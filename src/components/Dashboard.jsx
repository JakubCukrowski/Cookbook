import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

export const Dashboard = () => {
    const {user} = UserAuth()

    return (
        <section style={{maxWidth: "100%", minHeight: "100vh"}}>
            {user && user.email}
        </section>
    )
}