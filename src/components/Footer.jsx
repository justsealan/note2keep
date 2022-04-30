import React from "react";

function Footer() {
    let date = new Date().getFullYear();

    return (
        <footer className="footer">
        <p>
            ` S.E.A. &copy; {date}`
        </p>
        </footer>)
}

export default Footer;