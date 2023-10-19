import React from 'react'
import Footer from './Footer'

function Layout({ children,header }) {
    return (
        <div>
            {header}
            {children}
            <Footer />
        </div>
    )
}

export default Layout