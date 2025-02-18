import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: "fixed",
        top: "92.2%",
        width: "100%"
    }
    return (
        <footer className='text-center my-3 bg-dark text-light py-2' style={footerStyle}>
            <p> &copy; 2025 MyTodosList. All Rights Reserved</p>
        </footer>
    )
}

export default Footer
