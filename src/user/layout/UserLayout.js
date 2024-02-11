import React from 'react'
import { Outlet } from 'react-router-dom';

function UserLayout() {
    return (
        <>
            <h1>hello</h1>
            <Outlet />
        </>
    )
}

export default UserLayout