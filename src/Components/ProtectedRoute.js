import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

//Below we are making a component that redirects an unauthenticated user to the login screen. We pass in children in the params
//as a prop which refers to any component that is nested inside of the ProtectedRoute tags.
export default function ProtectedRoute({children}) {
    const { currentUser } = useAuth()
    //Below we check to see if there's a currentUser. If so, render the children components. Else, navigate the user to Login.
    return currentUser ? children : <Navigate to='/login' />
}