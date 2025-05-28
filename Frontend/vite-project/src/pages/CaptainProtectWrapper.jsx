import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../Context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

/**
 * CaptainProtectWrapper - Protects captain routes and validates authentication
 * This component ensures that only authenticated captains can access protected routes
 * by validating their token and fetching their profile data
 */
const CaptainProtectWrapper = ({
    children
}) => {
    // Get authentication token from localStorage
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Step 1: Check if token exists
        if (!token) {
            navigate('/captain-login')
            return
        }

        /**
         * Step 2: Validate Token with Profile API
         * 
         * Why we need this profile API check:
         * 1. Security: Validates if token is still valid and not expired
         * 2. Authentication: Ensures token hasn't been blacklisted after logout
         * 3. Data Integrity: Gets fresh captain data from server
         * 4. Prevention: Stops unauthorized access with fake/modified tokens
         * 
         * What happens without this check:
         * - Expired tokens could still be used
         * - Logged out users could reuse old tokens
         * - Modified/fake tokens might not be detected
         * - Deleted accounts could still access the app
         */
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            // Token is valid and captain profile was fetched
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
        .catch(err => {
            // Handle invalid/expired token scenarios:
            // - Token expired
            // - Token blacklisted
            // - Token invalid/tampered
            // - Captain account deleted
            localStorage.removeItem('token')
            navigate('/captain-login')
        })
    }, [token])

    // Show loading state while validating token and fetching profile
    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    // Render protected content only after validation
    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper