import React from "react";
import Link from "next/link";

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link  className="nav-link" href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href='/speakers'>
                            Speakers
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};