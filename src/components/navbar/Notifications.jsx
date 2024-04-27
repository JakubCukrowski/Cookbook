import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const Notifications = () => {
    const {user} = UserAuth()
    const [notifications, setNotifications] = useState([])
    
    useEffect(() => {
        const getNotifications = async () => {
            //get user data
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            setNotifications(docSnap.data().notifications)
        }

        getNotifications()
    }, [user])


    return (
        <div>
            {notifications.map((notification, index) => {
                return <p key={index}>Użytkownik {notification.addedBy} dodał właśnie przepis {notification.recipeName}</p>
            })}
        </div>
    )
}