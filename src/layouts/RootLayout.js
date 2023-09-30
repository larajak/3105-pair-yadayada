import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h3>Pair Assignment</h3>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="dashboard">Dashboard</NavLink>
                    <NavLink to="timeline">Timeline</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}